"use client";

import { useTranslations } from "@workspace/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import {
  Folder,
  type LucideIcon,
  MoreHorizontal,
  Share,
  Trash2,
} from "lucide-react";
import type { ComponentType } from "react";
import { useCallback } from "react";

interface ProjectNavItem {
  icon: LucideIcon;
  name: string;
  translationKey: string;
  url: string;
}

interface ProjectsNavProps {
  LinkComponent?:
    | ComponentType<{
        href: string;
        children: React.ReactNode;
        onClick?: () => void;
        className?: string;
      }>
    | "a";
  pathname: string;
  projects: ProjectNavItem[];
}

export function ProjectsNav({
  projects,
  pathname,
  LinkComponent = "a",
}: ProjectsNavProps) {
  const { isMobile, setOpenMobile } = useSidebar();
  const t = useTranslations("Navigation");

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, setOpenMobile]);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{t("projects")}</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          const active =
            pathname === item.url ||
            (item.url !== "/" && pathname.startsWith(item.url));
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild={true} isActive={active}>
                <LinkComponent
                  data-tooltip={t(item.translationKey)}
                  href={item.url}
                  onClick={handleLinkClick}
                >
                  <item.icon />
                  <span>{t(item.translationKey)}</span>
                </LinkComponent>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild={true}>
                  <SidebarMenuAction showOnHover={true}>
                    <MoreHorizontal />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align={isMobile ? "end" : "start"}
                  className="w-48"
                  side={isMobile ? "bottom" : "right"}
                >
                  <DropdownMenuItem>
                    <Folder className="text-muted-foreground" />
                    <span>{t("viewProject")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share className="text-muted-foreground" />
                    <span>{t("shareProject")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>{t("deleteProject")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <MoreHorizontal />
            <span>{t("more")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
