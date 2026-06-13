import * as p from "@clack/prompts";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import { execSync } from "node:child_process";
import type { ScaffoldOptions } from "./prompts.js";
import { cloneTemplate } from "./actions/clone.js";
import { renameProject } from "./actions/rename/index.js";
import { cleanFiles } from "./actions/clean.js";
import { initGit } from "./actions/git.js";
import { installDeps } from "./actions/install.js";
import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function scaffold(opts: ScaffoldOptions): Promise<void> {
  const projectDir = path.resolve(opts.directory);

  // Guard: target directory must be empty
  if (await fs.pathExists(projectDir)) {
    const entries = await fs.readdir(projectDir);
    if (entries.length > 0) {
      const overwrite = await p.confirm({
        message: `Directory ${opts.directory} is not empty. Overwrite?`,
        initialValue: false,
      });

      if (p.isCancel(overwrite) || !overwrite) {
        p.cancel("Setup cancelled.");
        process.exit(1);
      }
    }
  }

  const s = p.spinner();

  let depsInstalled = false;

  try {
    // 1. Download
    s.start("Downloading project files…");
    try {
      await cloneTemplate(projectDir, opts.branch);
    } catch (err) {
      throw new Error(
        err instanceof Error ? err.message : "Failed to download project files."
      );
    }
    s.stop("Project files downloaded.");

    // 2. Shadow template swap — replace branded content with clean starters
    s.start("Applying project templates…");
    const templatesDir = path.resolve(__dirname, "..", "templates");

    // Replace docs with clean starter docs
    const docsTarget = path.join(projectDir, "apps", "web", "content", "docs");
    await fs.remove(docsTarget);
    await fs.copy(path.join(templatesDir, "docs"), docsTarget);

    // Replace root README with project template
    const readmeTemplate = await fs.readFile(
      path.join(templatesDir, "README.md"),
      "utf-8"
    );
    await fs.writeFile(
      path.join(projectDir, "README.md"),
      readmeTemplate.replace(/\{\{PROJECT_NAME\}\}/g, opts.projectName)
    );

    // Replace root AGENTS.md with project template
    const agentsTemplate = await fs.readFile(
      path.join(templatesDir, "AGENTS.md"),
      "utf-8"
    );
    await fs.writeFile(
      path.join(projectDir, "AGENTS.md"),
      agentsTemplate.replace(/\{\{PROJECT_NAME\}\}/g, opts.projectName)
    );
    s.stop("Templates applied.");

    // 3. Rename
    s.start("Configuring project…");
    await renameProject(projectDir, opts);
    s.stop("Project configured.");

    // 4. Clean
    s.start("Cleaning up…");
    await cleanFiles(projectDir);
    s.stop("Done.");

    // 5. Git
    if (opts.initGit) {
      s.start("Initialising git…");
      try {
        await initGit(projectDir);
        s.stop("Git ready.");
      } catch (err: unknown) {
        s.stop("Skipped git init.");
        p.log.warn(
          `Could not initialize git: ${err instanceof Error ? err.message : String(err)}`
        );
      }
    }

    // 6. Install
    if (opts.installDeps) {
      s.start("Checking environment…");
      let pnpmFound = true;
      try {
        execSync("pnpm --version", { stdio: "ignore" });
        s.stop("Environment ok.");
      } catch {
        s.stop("pnpm not found.");
        pnpmFound = false;
      }

      if (pnpmFound) {
        s.start("Installing dependencies…");
        try {
          await installDeps(projectDir);
          s.stop("Dependencies installed.");
          depsInstalled = true;
        } catch (err: unknown) {
          s.stop("Dependency installation failed.");
          p.log.warn(
            `Could not install dependencies: ${err instanceof Error ? err.message : String(err)}`
          );
        }
      } else {
        p.log.warn(
          "Your project is created! However, dependencies could not be installed because pnpm was not found on your system. Once you install pnpm, you can run `pnpm install` inside the project directory."
        );
      }
    }
  } catch (err: unknown) {
    s.stop("Setup failed.");
    await fs.remove(projectDir);
    p.cancel(
      err instanceof Error
        ? err.message
        : "An unexpected error occurred during setup."
    );
    process.exit(1);
  }

  // Done
  p.note(
    [`cd ${opts.directory}`, depsInstalled ? "" : "pnpm install", "pnpm dev"]
      .filter(Boolean)
      .join("\n"),
    "Next steps"
  );

  p.outro("Your project is ready! 🚀");
}
