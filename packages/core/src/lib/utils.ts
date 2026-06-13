import { siteConfig } from "@workspace/core/config/site"

export async function fetchLatestGithubVersion(): Promise<string | null> {
  try {
    const res = await fetch(siteConfig.links.githubApi)
    if (!res.ok) return null
    const releases: {
      tag_name: string
      prerelease: boolean
      draft: boolean
    }[] = await res.json()
    const appRelease = releases.find(
      (r) => !(r.prerelease || r.draft) && /^v\d/.test(r.tag_name)
    )
    return appRelease?.tag_name?.replace(/^v/, "") || null
  } catch {
    return null
  }
}

/**
 * Returns a human-readable label for a hotkey key string.
 * Detects macOS to show ⌘ instead of Ctrl.
 * Handles sequence strings (e.g. "g>s") and combinators (e.g. "mod+k").
 */
export function formatHotkeyDisplay(keys: string): string[] {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)

  // Split by either `+` or `>` to support sequences like "g>s" and chords like "mod+k"
  return keys.split(/[+>]+/).map((key) => {
    switch (key) {
      case "mod":
        return isMac ? "⌘" : "Ctrl"
      case "shift":
        return isMac ? "⇧" : "Shift"
      case "alt":
        return isMac ? "⌥" : "Alt"
      default:
        return key.toUpperCase()
    }
  })
}
