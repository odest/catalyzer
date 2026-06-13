import path from "node:path";
import fs from "fs-extra";
import { log } from "@clack/prompts";
import { FILES_TO_CLEAN, CLI_CONFIG_REFS } from "../consts.js";

/** Remove scaffold-only files/dirs that shouldn't ship with new projects. */
export async function cleanFiles(projectDir: string): Promise<void> {
  await Promise.all(
    FILES_TO_CLEAN.map((file) => fs.remove(path.join(projectDir, file)))
  );

  // Remove packages/cli references from JSON config files
  await Promise.all(
    CLI_CONFIG_REFS.map(async (configFile) => {
      const filePath = path.join(projectDir, configFile);
      if (!(await fs.pathExists(filePath))) {
        return;
      }
      try {
        const json = await fs.readJson(filePath);
        let modified = false;

        if (
          json.packages &&
          typeof json.packages === "object" &&
          json.packages["packages/cli"]
        ) {
          json.packages["packages/cli"] = undefined;
          modified = true;
        }

        if (json["packages/cli"]) {
          json["packages/cli"] = undefined;
          modified = true;
        }

        if (modified) {
          await fs.writeJson(filePath, json, { spaces: 2 });
        }
      } catch (err: unknown) {
        log.warn(
          `Failed to clean JSON config at ${filePath}: ${err instanceof Error ? err.message : String(err)}`
        );
      }
    })
  );
}
