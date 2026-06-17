import { execa } from "execa";

/** Run pnpm install inside the scaffolded project. */
export async function installDeps(projectDir: string): Promise<void> {
  await execa("pnpm", ["install"], { cwd: projectDir });
}
