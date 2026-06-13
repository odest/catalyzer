"use client";

import { MainNav } from "@workspace/core/components/navigation/main-nav";
import { ProjectsNav } from "@workspace/core/components/navigation/projects-nav";
import { SecondaryNav } from "@workspace/core/components/navigation/secondary-nav";
import { UserNav } from "@workspace/core/components/navigation/user-nav";
import { navigationData } from "@workspace/core/config/navigation";
import { siteConfig } from "@workspace/core/config/site";
import { useMounted } from "@workspace/core/hooks/use-mounted";
import { useSidebarStore } from "@workspace/core/stores/sidebar-store";
import { Logo } from "@workspace/ui/components/landing/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import type * as React from "react";
import type { ComponentType } from "react";
import { useCallback } from "react";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  LinkComponent?:
    | ComponentType<{
        href: string;
        children: React.ReactNode;
        onClick?: () => void;
        className?: string;
      }>
    | "a";
  pathname: string;
}

export function AppSidebar({
  pathname,
  LinkComponent = "a",
  ...props
}: AppSidebarProps) {
  const { isMobile, setOpenMobile } = useSidebar();
  const { variant } = useSidebarStore();
  const mounted = useMounted();

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, setOpenMobile]);

  if (!mounted) {
    return null;
  }

  return (
    <Sidebar collapsible="icon" variant={variant} {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild={true}
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <LinkComponent href="/" onClick={handleLinkClick}>
                <Logo className="!size-5" />
                <span className="font-semibold text-base">
                  {siteConfig.name}
                </span>
              </LinkComponent>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav
          items={navigationData.navMain}
          LinkComponent={LinkComponent}
          pathname={pathname}
        />
        <ProjectsNav
          LinkComponent={LinkComponent}
          pathname={pathname}
          projects={navigationData.projects}
        />
        <SecondaryNav
          className="mt-auto"
          items={navigationData.navSecondary}
          LinkComponent={LinkComponent}
          pathname={pathname}
        />
      </SidebarContent>
      <SidebarFooter>
        <UserNav user={navigationData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
