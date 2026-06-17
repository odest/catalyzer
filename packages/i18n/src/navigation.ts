import { routing } from "@workspace/i18n/routing";
import { createNavigation } from "next-intl/navigation";

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
