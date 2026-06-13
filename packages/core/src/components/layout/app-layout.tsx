"use client";

import { CommandPalette } from "@workspace/core/components/common/command-palette";
import { HotkeysDialog } from "@workspace/core/components/common/hotkeys-dialog";
import { ProfileDrawer } from "@workspace/core/components/common/profile-drawer";
import { AppHeader } from "@workspace/core/components/layout/app-header";
import { AppSidebar } from "@workspace/core/components/layout/app-sidebar";
import { MobileBottomNav } from "@workspace/core/components/navigation/mobile-bottom-nav";
import { navigationData } from "@workspace/core/config/navigation";
import { useAppHotkeys } from "@workspace/core/hooks/use-app-hotkeys";
import { ThemeProvider } from "@workspace/core/providers/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { Toaster } from "@workspace/ui/components/sonner";
import { TooltipProvider } from "@workspace/ui/components/tooltip";
import type { ComponentType, ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
  LinkComponent?:
    | ComponentType<{
        href: string;
        children: React.ReactNode;
        onClick?: () => void;
        className?: string;
      }>
    | "a";
  navigate: (path: string) => void;
  pathname: string;
}

function HotkeysRegistrar({ navigate }: { navigate: (path: string) => void }) {
  useAppHotkeys({ navigate });
  return null;
}

export function AppLayout({
  children,
  pathname,
  navigate,
  LinkComponent,
}: AppLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
      enableColorScheme={true}
      enableSystem={true}
    >
      <TooltipProvider>
        <SidebarProvider className="h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          <HotkeysRegistrar navigate={navigate} />
          <AppSidebar LinkComponent={LinkComponent} pathname={pathname} />
          <SidebarInset>
            <AppHeader LinkComponent={LinkComponent} pathname={pathname} />
            {children}
            <Toaster />
            <MobileBottomNav
              items={navigationData.navMobile}
              LinkComponent={LinkComponent}
              pathname={pathname}
            />
          </SidebarInset>
          <HotkeysDialog />
          <CommandPalette navigate={navigate} />
          <ProfileDrawer user={navigationData.user} />
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
