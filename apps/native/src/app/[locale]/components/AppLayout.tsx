"use client"

import type React from "react"
import { Link, usePathname, useRouter } from "@workspace/i18n/navigation"
import { AppLayout as MainLayout } from "@workspace/core/components/layout/app-layout"

interface AppLayoutProps {
  children: React.ReactNode
}

// Disable prefetching to prevent race conditions and silent navigation
// failures on Tauri Windows (WebView2) when fetching RSC payloads.
const NativeLink = ({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) => (
  <Link href={href} prefetch={false} {...props}>
    {children}
  </Link>
)

export function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <MainLayout
      LinkComponent={NativeLink}
      navigate={(path) => router.push(path)}
      pathname={pathname}
    >
      {children}
    </MainLayout>
  )
}
