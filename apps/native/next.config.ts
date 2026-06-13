import createNextIntlPlugin from "@workspace/i18n/plugin";
import type { NextConfig } from "next";

// For Tauri static export, configure next-intl without server-side request config
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "dist",
  transpilePackages: ["@workspace/ui", "@workspace/core", "@workspace/i18n"],
};

export default withNextIntl(nextConfig) as NextConfig;
