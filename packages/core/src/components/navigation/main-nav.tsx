"use client";

import { useTranslations } from "@workspace/i18n";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { ChevronRight, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { useCallback } from "react";

interface MainNavItem {
  href?: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    translationKey: string;
  }[];
  title: string;
  translationKey: string;
  url: string;
}

interface MainNavProps {
  items: MainNavItem[];
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

export function MainNav({
  items,
  pathname,
  LinkComponent = "a",
}: MainNavProps) {
  const { isMobile, setOpenMobile } = useSidebar();
  const t = useTranslations("Navigation");

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, setOpenMobile]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("platform")}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const active =
            pathname === item.url ||
            (item.url !== "/" && pathname.startsWith(item.url));
          const href = item.href ?? item.url;
          return (
            <Collapsible
              asChild={true}
              defaultOpen={active}
              key={`${item.title}-${active}`}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild={true}
                  isActive={active}
                  tooltip={t(item.translationKey)}
                >
                  <LinkComponent
                    data-active={active}
                    href={href}
                    onClick={handleLinkClick}
                  >
                    <item.icon />
                    <span>{t(item.translationKey)}</span>
                  </LinkComponent>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild={true}>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => {
                          const subActive =
                            pathname === subItem.url ||
                            (subItem.url !== "/" &&
                              pathname.startsWith(subItem.url));
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild={true}
                                isActive={subActive}
                              >
                                <LinkComponent
                                  href={subItem.url}
                                  onClick={handleLinkClick}
                                >
                                  <span>{t(subItem.translationKey)}</span>
                                </LinkComponent>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
