import path from "node:path";
import fs from "fs-extra";
import { log } from "@clack/prompts";
import type { ScaffoldOptions } from "../../prompts.js";
import { findFilesByName } from "./utils.js";

const VERSION_CARGO_REGEX = /^version\s*=\s*"[^"]*"/m;
export async function replaceVersions(
  projectDir: string,
  opts: ScaffoldOptions
): Promise<void> {
  // All package.json files – update the `version` field
  const pkgFiles = await findFilesByName(projectDir, "package.json");
  await Promise.all(
    pkgFiles.map(async (pkgPath) => {
      try {
        const pkg = await fs.readJson(pkgPath);
        if (pkg.version) {
          pkg.version = opts.version;
          await fs.writeJson(pkgPath, pkg, { spaces: 2 });
        }
      } catch (err: unknown) {
        log.warn(
          `Failed to update version in ${pkgPath}: ${err instanceof Error ? err.message : String(err)}`
        );
      }
    })
  );

  // .release-please-manifest.json
  const manifestPath = path.join(projectDir, ".release-please-manifest.json");
  if (await fs.pathExists(manifestPath)) {
    try {
      const manifest = await fs.readJson(manifestPath);
      for (const key of Object.keys(manifest)) {
        manifest[key] = opts.version;
      }
      await fs.writeJson(manifestPath, manifest, { spaces: 2 });
    } catch (err: unknown) {
      log.warn(
        `Failed to update .release-please-manifest.json: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  // Cargo.toml
  const cargoPath = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "Cargo.toml"
  );
  if (await fs.pathExists(cargoPath)) {
    try {
      let cargo = await fs.readFile(cargoPath, "utf-8");
      cargo = cargo.replace(VERSION_CARGO_REGEX, `version = "${opts.version}"`);
      await fs.writeFile(cargoPath, cargo, "utf-8");
    } catch (err: unknown) {
      log.warn(
        `Failed to update Cargo.toml: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  // Cargo.lock
  const cargoLockPath = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "Cargo.lock"
  );
  if (await fs.pathExists(cargoLockPath)) {
    try {
      let cargoLock = await fs.readFile(cargoLockPath, "utf-8");
      const regex = new RegExp(
        `(name = "${opts.projectName}"\\s+version = )([^\\s]+)`,
        "g"
      );
      cargoLock = cargoLock.replace(regex, `$1"${opts.version}"`);
      await fs.writeFile(cargoLockPath, cargoLock, "utf-8");
    } catch (err: unknown) {
      log.warn(
        `Failed to update Cargo.lock: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  // tauri.conf.json
  const tauriConf = path.join(
    projectDir,
    "apps",
    "native",
    "src-tauri",
    "tauri.conf.json"
  );
  if (await fs.pathExists(tauriConf)) {
    try {
      const conf = await fs.readJson(tauriConf);
      if (conf.version) {
        conf.version = opts.version;
      }
      await fs.writeJson(tauriConf, conf, { spaces: 2 });
    } catch (err: unknown) {
      log.warn(
        `Failed to update tauri.conf.json: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }
}
