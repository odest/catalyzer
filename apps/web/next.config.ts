import type { NextConfig } from "next";
import createNextIntlPlugin from "@workspace/i18n/plugin";
import { createMDX } from "fumadocs-mdx/next";
import { withSerwist } from "@serwist/turbopack";

const withNextIntl = createNextIntlPlugin();
const withMdx = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/core", "@workspace/i18n"],
};

export default withSerwist(withNextIntl(withMdx(nextConfig)));
