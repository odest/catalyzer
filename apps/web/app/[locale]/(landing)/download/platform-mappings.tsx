import { siteConfig } from "@workspace/core/config/site";
import { Android } from "@workspace/ui/components/svgs/android";
import { Apple } from "@workspace/ui/components/svgs/apple";
import { Linux } from "@workspace/ui/components/svgs/linux";
import { Windows } from "@workspace/ui/components/svgs/windows";
import { Download, Github } from "lucide-react";
import type React from "react";
import type { Platform } from "@/lib/detect-platform";

// Per-platform UI config for the primary download button
export const platformConfig: Record<
  Platform,
  { label: string; icon: React.ReactNode; primaryAssetKey: string }
> = {
  windows: {
    label: "Download for Windows",
    icon: <Windows className="size-5" />,
    primaryAssetKey: "windows_x64_exe",
  },
  macos: {
    label: "Download for macOS",
    icon: <Apple className="size-5" />,
    primaryAssetKey: "macos_aarch64_dmg",
  },
  linux: {
    label: "Download for Linux",
    icon: <Linux className="size-5" />,
    primaryAssetKey: "linux_amd64_deb",
  },
  android: {
    label: "Download for Android",
    icon: <Android className="size-5" />,
    primaryAssetKey: "android_arm64_apk",
  },
  ios: {
    label: "Download for iOS",
    icon: <Apple className="size-5" />,
    primaryAssetKey: "",
  },
  unknown: {
    label: "Download",
    icon: <Download className="size-5" />,
    primaryAssetKey: "",
  },
};

export interface DownloadOption {
  assetKey: string;
  ext: string;
  label: string;
}

export interface PlatformCardData {
  colSpan: 2 | 3;
  downloads: DownloadOption[];
  icon: React.ReactNode;
  name: string;
}

// Platform cards data
export const platformCards: PlatformCardData[] = [
  {
    name: "Windows",
    icon: <Windows aria-hidden={true} className="size-6" />,
    colSpan: 2,
    downloads: [
      { assetKey: "windows_x64_exe", label: "Standard Installer", ext: ".exe" },
      { assetKey: "windows_x64_msi", label: "System Installer", ext: ".msi" },
    ],
  },
  {
    name: "macOS",
    icon: <Apple aria-hidden={true} className="size-6" />,
    colSpan: 2,
    downloads: [
      { assetKey: "macos_aarch64_dmg", label: "Apple Silicon", ext: ".dmg" },
      { assetKey: "macos_x64_dmg", label: "Intel Chip", ext: ".dmg" },
    ],
  },
  {
    name: "Linux",
    icon: <Linux aria-hidden={true} className="size-6" />,
    colSpan: 2,
    downloads: [
      { assetKey: "linux_amd64_deb", label: "Debian/Ubuntu", ext: ".deb" },
      {
        assetKey: "linux_amd64_appimage",
        label: "Universal",
        ext: ".AppImage",
      },
    ],
  },
  {
    name: "Android",
    icon: <Android aria-hidden={true} className="size-6" />,
    colSpan: 3,
    downloads: [
      { assetKey: "android_universal_apk", label: "Universal", ext: ".apk" },
      { assetKey: "android_arm64_apk", label: "ARM64", ext: ".apk" },
    ],
  },
  {
    name: "Other Platforms",
    icon: <Github aria-hidden={true} className="size-6" />,
    colSpan: 3,
    downloads: [
      {
        assetKey: siteConfig.links.releases,
        label: "iOS App",
        ext: "Coming soon",
      },
      {
        assetKey: siteConfig.links.releases,
        label: "View all releases",
        ext: "GitHub",
      },
    ],
  },
];
