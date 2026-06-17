import { execSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import {
  cancel,
  confirm,
  isCancel,
  log,
  note,
  outro,
  spinner,
} from "@clack/prompts";
import fs from "fs-extra";
import { cleanFiles } from "./actions/clean.js";
import { cloneTemplate } from "./actions/clone.js";
import { initGit } from "./actions/git.js";
import { installDeps } from "./actions/install.js";
import { renameProject } from "./actions/rename/index.js";
import type { ScaffoldOptions } from "./prompts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function guardDirectory(opts: ScaffoldOptions): Promise<void> {
  const projectDir = path.resolve(opts.directory);
  if (!(await fs.pathExists(projectDir))) {
    return;
  }
  const entries = await fs.readdir(projectDir);
  if (entries.length === 0) {
    return;
  }
  const overwrite = await confirm({
    message: `Directory ${opts.directory} is not empty. Overwrite?`,
    initialValue: false,
  });
  if (isCancel(overwrite) || !overwrite) {
    cancel("Setup cancelled.");
    process.exit(1);
  }
}

async function downloadFiles(
  projectDir: string,
  branch: string,
  s: ReturnType<typeof spinner>
): Promise<void> {
  s.start("Downloading project files…");
  try {
    await cloneTemplate(projectDir, branch);
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to download project files."
    );
  }
  s.stop("Project files downloaded.");
}

async function applyTemplates(
  projectDir: string,
  projectName: string,
  s: ReturnType<typeof spinner>
): Promise<void> {
  s.start("Applying project templates…");
  const templatesDir = path.resolve(__dirname, "..", "templates");

  const docsTarget = path.join(projectDir, "apps", "web", "content", "docs");
  await fs.remove(docsTarget);
  await fs.copy(path.join(templatesDir, "docs"), docsTarget);

  const readmeTemplate = await fs.readFile(
    path.join(templatesDir, "README.md"),
    "utf-8"
  );
  await fs.writeFile(
    path.join(projectDir, "README.md"),
    readmeTemplate.replace(/\{\{PROJECT_NAME\}\}/g, projectName)
  );

  const agentsTemplate = await fs.readFile(
    path.join(templatesDir, "AGENTS.md"),
    "utf-8"
  );
  await fs.writeFile(
    path.join(projectDir, "AGENTS.md"),
    agentsTemplate.replace(/\{\{PROJECT_NAME\}\}/g, projectName)
  );
  s.stop("Templates applied.");
}

async function tryInitGit(
  projectDir: string,
  s: ReturnType<typeof spinner>
): Promise<void> {
  s.start("Initialising git…");
  try {
    await initGit(projectDir);
    s.stop("Git ready.");
  } catch (err: unknown) {
    s.stop("Skipped git init.");
    log.warn(
      `Could not initialize git: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

async function tryInstallDeps(
  projectDir: string,
  s: ReturnType<typeof spinner>
): Promise<boolean> {
  s.start("Checking environment…");
  let pnpmFound = true;
  try {
    execSync("pnpm --version", { stdio: "ignore" });
    s.stop("Environment ok.");
  } catch {
    s.stop("pnpm not found.");
    pnpmFound = false;
  }

  if (!pnpmFound) {
    log.warn(
      "Your project is created! However, dependencies could not be installed because pnpm was not found on your system. Once you install pnpm, you can run `pnpm install` inside the project directory."
    );
    return false;
  }

  s.start("Installing dependencies…");
  try {
    await installDeps(projectDir);
    s.stop("Dependencies installed.");
    return true;
  } catch (err: unknown) {
    s.stop("Dependency installation failed.");
    log.warn(
      `Could not install dependencies: ${err instanceof Error ? err.message : String(err)}`
    );
    return false;
  }
}

export async function scaffold(opts: ScaffoldOptions): Promise<void> {
  const projectDir = path.resolve(opts.directory);

  await guardDirectory(opts);

  const s = spinner();
  let depsInstalled = false;

  try {
    await downloadFiles(projectDir, opts.branch, s);
    await applyTemplates(projectDir, opts.projectName, s);

    s.start("Configuring project…");
    await renameProject(projectDir, opts);
    s.stop("Project configured.");

    s.start("Cleaning up…");
    await cleanFiles(projectDir);
    s.stop("Done.");

    if (opts.initGit) {
      await tryInitGit(projectDir, s);
    }

    if (opts.installDeps) {
      depsInstalled = await tryInstallDeps(projectDir, s);
    }
  } catch (err: unknown) {
    s.stop("Setup failed.");
    await fs.remove(projectDir);
    cancel(
      err instanceof Error
        ? err.message
        : "An unexpected error occurred during setup."
    );
    process.exit(1);
  }

  // Done
  note(
    [`cd ${opts.directory}`, depsInstalled ? "" : "pnpm install", "pnpm dev"]
      .filter(Boolean)
      .join("\n"),
    "Next steps"
  );

  outro("Your project is ready! 🚀");
}
