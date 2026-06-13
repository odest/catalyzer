/**
 * Validate a project name: lowercase letters, numbers, and hyphens only.
 */
export function validateProjectName(
  value: string | undefined
): string | undefined {
  if (!value || value.length === 0) return "Project name cannot be empty.";
  if (!/^[a-z0-9-_]+$/.test(value))
    return "Use only lowercase letters, numbers, hyphens, and underscores.";
  if (
    value.startsWith("-") ||
    value.endsWith("-") ||
    value.startsWith("_") ||
    value.endsWith("_")
  )
    return "Cannot start or end with a hyphen or underscore.";
  return;
}

/**
 * Validate a semver version string (e.g. 0.1.0).
 */
export function validateVersion(value: string | undefined): string | undefined {
  if (!value) return;
  if (!/^\d+\.\d+\.\d+$/.test(value))
    return "Must be a valid semver version (e.g. 0.1.0).";
  return;
}

/**
 * Convert kebab-case to snake_case for Android package paths.
 */
export function toSnakeCase(name: string): string {
  return name.replace(/-/g, "_");
}

/**
 * Convert kebab-case to PascalCase (e.g. "my-app" → "MyApp").
 */
export function toPascalCase(name: string): string {
  return name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

/**
 * Validate a reverse-domain app identifier (e.g. com.myapp.app).
 * Must follow Java package name rules: lowercase letters, digits, dots, underscores.
 * Requires at least 3 parts (e.g. com.company.app).
 * Each part must start with a letter and be at least 2 characters long.
 */
export function validateIdentifier(
  value: string | undefined
): string | undefined {
  if (!value) return "Identifier cannot be empty.";
  if (!/^[a-z][a-z0-9_]{1,}(\.[a-z][a-z0-9_]{1,}){2,}$/.test(value))
    return "Must be a valid reverse-domain identifier (e.g. com.myapp.app). Requires at least 3 parts, starting with a letter, minimum 2 characters per part.";
  return;
}
