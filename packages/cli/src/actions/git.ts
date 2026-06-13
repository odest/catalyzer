import { execa } from "execa";

/** Initialise a fresh git repo with an initial commit. */
export async function initGit(projectDir: string): Promise<void> {
  await execa("git", ["init"], { cwd: projectDir });
  await execa("git", ["add", "."], { cwd: projectDir });
  await execa(
    "git",
    ["commit", "-m", "chore: initialize project using create-catalyzer"],
    {
      cwd: projectDir,
    }
  );
}
