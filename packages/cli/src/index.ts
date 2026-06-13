#!/usr/bin/env node
import { Command } from "commander";
import pc from "picocolors";
import { intro, cancel } from "@clack/prompts";
import { runPrompts } from "./prompts.js";
import { scaffold } from "./scaffold.js";
import {
  toPascalCase,
  toSnakeCase,
  validateProjectName,
  validateVersion,
  validateIdentifier,
} from "./utils/validate.js";

declare const __CLI_VERSION__: string;
import { DEFAULT_VERSION } from "./consts.js";
import process from "node:process";

const banner = `
 ██████╗ █████╗ ████████╗ █████╗ ██╗  ██╗   ██╗███████╗███████╗██████╗ 
██╔════╝██╔══██╗╚══██╔══╝██╔══██╗██║  ╚██╗ ██╔╝╚══███╔╝██╔════╝██╔══██╗
██║     ███████║   ██║   ███████║██║   ╚████╔╝   ███╔╝ █████╗  ██████╔╝
██║     ██╔══██║   ██║   ██╔══██║██║    ╚██╔╝   ███╔╝  ██╔══╝  ██╔══██╗
╚██████╗██║  ██║   ██║   ██║  ██║███████╗██║   ███████╗███████╗██║  ██║
 ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝
`;

const program = new Command()
  .name("catalyzer")
  .description("Scaffold a new Catalyzer project")
  .version(__CLI_VERSION__)
  .option("-n, --name <name>", "Project name")
  .option("-d, --directory <dir>", "Output directory")
  .option("-g, --github-user <user>", "GitHub username / org")
  .option("-i, --identifier <id>", "App identifier (reverse-domain)")
  .option("-v, --app-version <ver>", "Initial version")
  .option("--no-install", "Skip dependency installation")
  .option("--no-git", "Skip git initialization")
  .option("-b, --branch <branch>", "Template branch to clone", "master")
  .action(async (flags) => {
    // biome-ignore lint/suspicious/noConsole: CLI banner
    console.log(pc.cyan(banner));
    intro(pc.bold(pc.green("Catalyzer Scaffold Tool")));

    if (flags.name) {
      // Non-interactive mode
      const nameErr = validateProjectName(flags.name);
      if (nameErr) {
        cancel(nameErr);
        process.exit(1);
      }
      if (flags.appVersion) {
        const verErr = validateVersion(flags.appVersion);
        if (verErr) {
          cancel(verErr);
          process.exit(1);
        }
      }

      const identifier =
        flags.identifier ?? `com.${toSnakeCase(flags.name)}.app`;
      const idErr = validateIdentifier(identifier);
      if (idErr) {
        cancel(idErr);
        process.exit(1);
      }

      await scaffold({
        projectName: flags.name,
        projectNamePascal: toPascalCase(flags.name),
        projectNameSnake: toSnakeCase(flags.name),
        directory: flags.directory ?? `./${flags.name}`,
        githubUser: flags.githubUser ?? "your-github-username",
        identifier,
        version: flags.appVersion ?? DEFAULT_VERSION,
        installDeps: flags.install ?? true,
        initGit: flags.git ?? true,
        branch: flags.branch,
      });
    } else {
      // Interactive mode
      const opts = await runPrompts(flags.directory);
      await scaffold(opts);
    }
  });

program.parse();
