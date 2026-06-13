import path from "node:path";
import fs from "fs-extra";
import { log } from "@clack/prompts";
import { SEARCH_TERMS } from "../../consts.js";
import type { ScaffoldOptions } from "../../prompts.js";
import {
  walkFiles,
  applyReplacements,
  findDirsByName,
  removeEmptyParents,
} from "./utils.js";

const DESC_REGEX = /description\s*=\s*"A Tauri App"/;
const AUTHORS_REGEX = /authors\s*=\s*\["you"\]/;

function buildNativeReplacementMap(opts: ScaffoldOptions): [string, string][] {
  return [
    [SEARCH_TERMS.identifier, opts.identifier],
    ["catalyzer_lib", `${opts.projectNameSnake}_lib`],
    [SEARCH_TERMS.namePascal, opts.projectNamePascal],
    [SEARCH_TERMS.name, opts.projectNameSnake], // src-tauri uses snake_case or kebab-case for binaries
  ];
}

export async function updateNativeFiles(
  projectDir: string,
  opts: ScaffoldOptions
) {
  const nativeDir = path.join(projectDir, "apps", "native", "src-tauri");
  if (!(await fs.pathExists(nativeDir))) {
    return;
  }

  const map = buildNativeReplacementMap(opts);
  const files = await walkFiles(nativeDir);

  for (const file of files) {
    try {
      const content = await fs.readFile(file, "utf-8");
      const updated = applyReplacements(content, map);
      if (updated !== content) {
        await fs.writeFile(file, updated, "utf-8");
      }
    } catch (err: unknown) {
      if (err instanceof Error && !err.message.includes("is not valid UTF-8")) {
        log.warn(`Could not rename contents of ${file}: ${err.message}`);
      }
    }
  }

  await updateCargoMetadata(projectDir, opts);
}

export async function updateCargoMetadata(
  projectDir: string,
  opts: ScaffoldOptions
) {
  const cargoPath = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "Cargo.toml"
  );
  if (!(await fs.pathExists(cargoPath))) {
    return;
  }

  try {
    let content = await fs.readFile(cargoPath, "utf-8");
    content = content.replace(
      DESC_REGEX,
      `description = "${opts.projectNamePascal}"`
    );
    content = content.replace(
      AUTHORS_REGEX,
      `authors = ["${opts.githubUser}"]`
    );
    await fs.writeFile(cargoPath, content, "utf-8");
  } catch (err: unknown) {
    log.warn(
      `Could not update Cargo.toml metadata: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

export async function renameAndroidDirs(
  projectDir: string,
  opts: ScaffoldOptions
): Promise<void> {
  const oldSegments = SEARCH_TERMS.identifier.split(".");
  const newSegments = opts.identifier.split(".");

  const androidGenDir = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "gen",
    "android"
  );
  if (!(await fs.pathExists(androidGenDir))) {
    return;
  }

  // Find every `java` directory under the Android gen tree
  const javaDirs = await findDirsByName(androidGenDir, "java");

  for (const javaDir of javaDirs) {
    const oldDir = path.join(javaDir, ...oldSegments);
    if (!(await fs.pathExists(oldDir))) {
      continue;
    }

    const newDir = path.join(javaDir, ...newSegments);
    await fs.ensureDir(path.dirname(newDir));
    await fs.move(oldDir, newDir, { overwrite: true });

    // Remove empty ancestor directories left behind
    await removeEmptyParents(path.dirname(oldDir), javaDir);
  }
}

export async function renameAppleDirsAndFiles(
  projectDir: string,
  opts: ScaffoldOptions
): Promise<void> {
  const appleGenDir = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "gen",
    "apple"
  );
  if (!(await fs.pathExists(appleGenDir))) {
    return;
  }

  // Find all files and directories under appleGenDir
  const allPaths: string[] = [];
  async function collectPaths(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      allPaths.push(full);
      if (entry.isDirectory()) {
        await collectPaths(full);
      }
    }
  }
  await collectPaths(appleGenDir);

  // Sort paths by descending length so that innermost files/dirs are renamed first
  allPaths.sort((a, b) => b.length - a.length);

  for (const pPath of allPaths) {
    if (!(await fs.pathExists(pPath))) {
      continue; // skip if already moved by parent
    }

    const basename = path.basename(pPath);
    let newBasename = basename;

    if (newBasename.includes(SEARCH_TERMS.namePascal)) {
      newBasename = newBasename.replaceAll(
        SEARCH_TERMS.namePascal,
        opts.projectNamePascal
      );
    }
    if (newBasename.includes(SEARCH_TERMS.name)) {
      newBasename = newBasename.replaceAll(SEARCH_TERMS.name, opts.projectName);
    }

    if (newBasename !== basename) {
      const newPath = path.join(path.dirname(pPath), newBasename);
      await fs.move(pPath, newPath, { overwrite: true });
    }
  }
}
