import type { ScaffoldOptions } from "../../prompts.js";
import {
  updateSiteConfig,
  updateRootPackageJson,
  updateReleasePleaseConfig,
} from "./web.js";
import {
  updateNativeFiles,
  renameAndroidDirs,
  renameAppleDirsAndFiles,
} from "./native.js";
import { replaceVersions } from "./version.js";

/**
 * Safely renames project details by explicitly targeting known config files
 * and the native src-tauri directory, completely avoiding global find-replace.
 */
export async function renameProject(
  projectDir: string,
  opts: ScaffoldOptions
): Promise<void> {
  // 1. Update site.ts specifically
  await updateSiteConfig(projectDir, opts);

  // 2. Update root package.json name and release-please config
  await updateRootPackageJson(projectDir, opts);
  await updateReleasePleaseConfig(projectDir, opts);

  // 3. Rename native identifiers and lib names ONLY inside src-tauri
  await updateNativeFiles(projectDir, opts);

  // 4. Rename Android Java package directories
  await renameAndroidDirs(projectDir, opts);

  // 5. Rename Apple directories and files
  await renameAppleDirsAndFiles(projectDir, opts);

  // 6. Update version fields in known config files
  await replaceVersions(projectDir, opts);
}
