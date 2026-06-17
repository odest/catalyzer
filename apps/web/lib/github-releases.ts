import { siteConfig } from "@workspace/core/config/site";

const VERSION_REGEX = /^v\d/;
const V_PREFIX_REGEX = /^v/;

export interface ReleaseData {
  assets: Record<string, string>;
  version: string;
}

// Map from asset filename pattern to a normalized key
function assetNameToKey(name: string): string | null {
  const lower = name.toLowerCase();

  // Windows
  if (lower.includes("windows") && lower.endsWith(".exe")) {
    return "windows_x64_exe";
  }
  if (lower.includes("windows") && lower.endsWith(".msi")) {
    return "windows_x64_msi";
  }

  // macOS
  if (lower.includes("macos_aarch64") && lower.endsWith(".dmg")) {
    return "macos_aarch64_dmg";
  }
  if (lower.includes("macos_x64") && lower.endsWith(".dmg")) {
    return "macos_x64_dmg";
  }

  // Linux
  if (lower.includes("linux") && lower.endsWith(".appimage")) {
    return "linux_amd64_appimage";
  }
  if (lower.includes("linux") && lower.endsWith(".deb")) {
    return "linux_amd64_deb";
  }

  // Android
  if (lower.includes("android_universal") && lower.endsWith(".apk")) {
    return "android_universal_apk";
  }
  if (lower.includes("android_arm64") && lower.endsWith(".apk")) {
    return "android_arm64_apk";
  }

  return null;
}

interface GitHubRelease {
  assets: { name: string; browser_download_url: string; size: number }[];
  draft: boolean;
  prerelease: boolean;
  tag_name: string;
}

// Fetches the latest GitHub release that has download assets. Uses ISR with 1-hour revalidation.
export async function fetchLatestReleaseWithAssets(): Promise<ReleaseData | null> {
  try {
    const res = await fetch(siteConfig.links.githubApi, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return null;
    }

    const releases: GitHubRelease[] = await res.json();

    const release = releases.find(
      (r) =>
        !(r.prerelease || r.draft) &&
        VERSION_REGEX.test(r.tag_name) &&
        r.assets.length > 0
    );

    if (!release) {
      return null;
    }

    const assets: Record<string, string> = {};
    for (const asset of release.assets) {
      const key = assetNameToKey(asset.name);
      if (key) {
        assets[key] = asset.browser_download_url;
      }
    }

    return {
      version: release.tag_name.replace(V_PREFIX_REGEX, ""),
      assets,
    };
  } catch {
    return null;
  }
}
