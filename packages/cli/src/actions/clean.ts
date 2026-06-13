import path from "node:path";
import fs from "fs-extra";
import * as p from "@clack/prompts";
import { FILES_TO_CLEAN, CLI_CONFIG_REFS } from "../consts.js";

/** Remove scaffold-only files/dirs that shouldn't ship with new projects. */
export async function cleanFiles(projectDir: string): Promise<void> {
  for (const file of FILES_TO_CLEAN) {
    await fs.remove(path.join(projectDir, file));
  }

  // Remove packages/cli references from JSON config files
  for (const configFile of CLI_CONFIG_REFS) {
    const filePath = path.join(projectDir, configFile);
    if (!(await fs.pathExists(filePath))) continue;
    try {
      const json = await fs.readJson(filePath);
      let modified = false;

      if (
        json.packages &&
        typeof json.packages === "object" &&
        json.packages["packages/cli"]
      ) {
        delete json.packages["packages/cli"];
        modified = true;
      }

      if (json["packages/cli"]) {
        delete json["packages/cli"];
        modified = true;
      }

      if (modified) {
        await fs.writeJson(filePath, json, { spaces: 2 });
      }
    } catch (err: unknown) {
      p.log.warn(
        `Failed to clean JSON config at ${filePath}: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }
}
