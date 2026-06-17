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

/** Exit gracefully when the user cancels a prompt. */
function exitIfCancelled<T>(value: T | symbol): T {
  if (isCancel(value)) {
    cancel("Setup cancelled.");
    process.exit(0);
  }
  return value;
}

async function collectProjectInfo(defaultDir?: string) {
  const projectName = exitIfCancelled(
    await text({
      message: "What is your project name?",
      placeholder: "my-awesome-app",
      validate: validateProjectName,
    })
  );

  const directory = defaultDir ?? `./${projectName}`;

  const defaultIdentifier = `com.${toSnakeCase(projectName)}.app`;
  const identifierRaw = exitIfCancelled(
    await text({
      message: "App identifier (reverse-domain)?",
      placeholder: defaultIdentifier,
      validate: (val) => {
        if (!val) {
          return;
        }
        return validateIdentifier(val);
      },
    })
  );
  const identifier = identifierRaw || defaultIdentifier;

  const githubUserRaw = exitIfCancelled(
    await text({
      message: "GitHub username / org (optional)?",
      placeholder: "your-github-username",
    })
  );
  const githubUser = githubUserRaw || "your-github-username";

  const versionRaw = exitIfCancelled(
    await text({
      message: "Initial version?",
      placeholder: DEFAULT_VERSION,
      validate: (val) => {
        if (!val) {
          return;
        }
        return validateVersion(val);
      },
    })
  );
  const version = versionRaw || DEFAULT_VERSION;

  return { projectName, directory, identifier, githubUser, version };
}

async function collectFlags() {
  const installDeps = exitIfCancelled(
    await confirm({
      message: "Install dependencies?",
      initialValue: true,
    })
  );

  const initGit = exitIfCancelled(
    await confirm({
      message: "Initialize a new git repository?",
      initialValue: true,
    })
  );

  return { installDeps, initGit };
}

/**
 * Run interactive prompts and return the scaffold options.
 * If the user cancels at any point, the process exits.
 */
export async function runPrompts(
  defaultDir?: string
): Promise<ScaffoldOptions> {
  while (true) {
    const info = await collectProjectInfo(defaultDir);
    const flags = await collectFlags();

    const opts: ScaffoldOptions = {
      projectName: info.projectName,
      projectNamePascal: toPascalCase(info.projectName),
      projectNameSnake: toSnakeCase(info.projectName),
      directory: info.directory,
      githubUser: info.githubUser,
      identifier: info.identifier,
      version: info.version,
      installDeps: flags.installDeps,
      initGit: flags.initGit,
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

    const confirmed = exitIfCancelled(
      await confirm({
        message: "Proceed with these settings?",
        initialValue: true,
      })
    );

    if (confirmed) {
      return opts;
    }

    // If not confirmed, it loops back to the beginning.
    log.info("Let's try that again...");
  }
}
