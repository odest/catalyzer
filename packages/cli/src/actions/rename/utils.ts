import path from "node:path";
import fs from "fs-extra";
import { SKIP_PATTERNS } from "../../consts.js";

/** Check whether a path should be skipped (binary, build artifact, etc.). */
export function shouldSkip(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, "/");
  const basename = path.basename(filePath);
  return SKIP_PATTERNS.some((pattern) => {
    if (pattern.startsWith("*.")) {
      return basename.endsWith(pattern.slice(1));
    }
    return basename === pattern || normalized.includes(`/${pattern}/`);
  });
}

/** Recursively list all files, respecting skip patterns. */
export async function walkFiles(dir: string): Promise<string[]> {
  const results: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (shouldSkip(fullPath)) {
      continue;
    }
    if (entry.isDirectory()) {
      results.push(...(await walkFiles(fullPath)));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

export function applyReplacements(
  content: string,
  map: [string, string][]
): string {
  let result = content;
  for (const [from, to] of map) {
    result = result.replaceAll(from, to);
  }
  return result;
}

export async function findDirsByName(
  root: string,
  targetName: string
): Promise<string[]> {
  const results: string[] = [];
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }
    const full = path.join(root, entry.name);
    if (entry.name === targetName) {
      results.push(full);
    } else {
      results.push(...(await findDirsByName(full, targetName)));
    }
  }
  return results;
}

export async function removeEmptyParents(
  dir: string,
  stopAt: string
): Promise<void> {
  if (dir === stopAt || !dir.startsWith(stopAt)) {
    return;
  }
  try {
    const entries = await fs.readdir(dir);
    if (entries.length === 0) {
      await fs.rmdir(dir);
      await removeEmptyParents(path.dirname(dir), stopAt);
    }
  } catch {
    // ignore
  }
}

export async function findFilesByName(
  root: string,
  name: string
): Promise<string[]> {
  const results: string[] = [];
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkip(full)) {
        continue;
      }
      results.push(...(await findFilesByName(full, name)));
    } else if (entry.name === name) {
      results.push(full);
    }
  }
  return results;
}
