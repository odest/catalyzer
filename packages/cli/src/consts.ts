export const TEMPLATE_SOURCE = "github:odest/catalyzer";

export const DEFAULT_VERSION = "0.1.0";

/** Search terms used for automatic find-replace across the entire project. */
export const SEARCH_TERMS = {
  name: "catalyzer",
  namePascal: "Catalyzer",
  identifier: "com.catalyzer.app",
  githubUser: "odest",
} as const;

/**
 * Directories and files to skip when scanning for replacements.
 * Binary files, lock files, and build artifacts are excluded.
 */
export const SKIP_PATTERNS = [
  "node_modules",
  ".git",
  "target",
  "dist",
  ".turbo",
  ".next",
  // Binary / non-text
  "*.png",
  "*.ico",
  "*.icns",
  "*.webp",
  "*.woff",
  "*.woff2",
  "*.ttf",
  "*.eot",
  "*.jar",
  "*.so",
  "*.dylib",
  "*.exe",
  "*.dll",
  // Lock files managed by tools (pnpm-lock will be regenerated)
  "pnpm-lock.yaml",
] as const;

/** Files/dirs to delete after cloning (relative to project root). */
export const FILES_TO_CLEAN = [
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "packages/cli",
  ".github/FUNDING.yml",
  ".github/workflows/publish-cli.yml",
  ".github/assets",
] as const;

/**
 * JSON config files that reference packages/cli.
 * The clean action removes these entries after deleting the CLI package.
 */
export const CLI_CONFIG_REFS = [
  "release-please-config.json",
  ".release-please-manifest.json",
] as const;
