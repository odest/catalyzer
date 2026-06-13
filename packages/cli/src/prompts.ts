import process from "node:process";
import { cancel, confirm, isCancel, log, note, text } from "@clack/prompts";
import pc from "picocolors";
import { DEFAULT_VERSION } from "./consts.js";
import {
  toPascalCase,
  toSnakeCase,
  validateIdentifier,
  validateProjectName,
  validateVersion,
} from "./utils/validate.js";

export interface ScaffoldOptions {
  branch: string;
  directory: string;
  githubUser: string;
  identifier: string;
  initGit: boolean;
  installDeps: boolean;
  projectName: string;
  projectNamePascal: string;
  projectNameSnake: string;
  version: string;
}

/**
 * Run interactive prompts and return the scaffold options.
 * If the user cancels at any point, the process exits.
 */
export async function runPrompts(
  defaultDir?: string
): Promise<ScaffoldOptions> {
  while (true) {
    const projectName = await text({
      message: "What is your project name?",
      placeholder: "my-awesome-app",
      validate: validateProjectName,
    });
    if (isCancel(projectName)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }

    const directory = defaultDir ?? `./${projectName}`;

    const defaultIdentifier = `com.${toSnakeCase(projectName)}.app`;
    const identifierRaw = await text({
      message: "App identifier (reverse-domain)?",
      placeholder: defaultIdentifier,
      validate: (val) => {
        if (!val) {
          return;
        }
        return validateIdentifier(val);
      },
    });
    if (isCancel(identifierRaw)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }
    const identifier = identifierRaw || defaultIdentifier;

    const githubUserRaw = await text({
      message: "GitHub username / org (optional)?",
      placeholder: "your-github-username",
    });
    if (isCancel(githubUserRaw)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }
    const githubUser = githubUserRaw || "your-github-username";

    const versionRaw = await text({
      message: "Initial version?",
      placeholder: DEFAULT_VERSION,
      validate: (val) => {
        if (!val) {
          return;
        }
        return validateVersion(val);
      },
    });
    if (isCancel(versionRaw)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }
    const version = versionRaw || DEFAULT_VERSION;

    const installDeps = await confirm({
      message: "Install dependencies?",
      initialValue: true,
    });
    if (isCancel(installDeps)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }

    const initGit = await confirm({
      message: "Initialize a new git repository?",
      initialValue: true,
    });
    if (isCancel(initGit)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }

    const opts: ScaffoldOptions = {
      projectName,
      projectNamePascal: toPascalCase(projectName),
      projectNameSnake: toSnakeCase(projectName),
      directory,
      githubUser,
      identifier,
      version,
      installDeps,
      initGit,
      branch: "master",
    };

    // Summary
    note(
      [
        `${pc.bold("Project")}       ${opts.projectName}`,
        `${pc.bold("Directory")}     ${opts.directory}`,
        `${pc.bold("GitHub user")}   ${opts.githubUser}`,
        `${pc.bold("Identifier")}    ${opts.identifier}`,
        `${pc.bold("Version")}       ${opts.version}`,
        `${pc.bold("Install deps")}  ${opts.installDeps ? "yes" : "no"}`,
        `${pc.bold("Init Git")}      ${opts.initGit ? "yes" : "no"}`,
      ].join("\n"),
      "Summary"
    );

    const confirmed = await confirm({
      message: "Proceed with these settings?",
      initialValue: true,
    });

    if (isCancel(confirmed)) {
      cancel("Setup cancelled.");
      process.exit(0);
    }

    if (confirmed) {
      return opts;
    }

    // If not confirmed, it loops back to the beginning.
    log.info("Let's try that again...");
  }
}
