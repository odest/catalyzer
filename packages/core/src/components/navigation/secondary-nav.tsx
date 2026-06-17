import { useTranslations } from "@workspace/i18n";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import type { LucideIcon } from "lucide-react";
import type * as React from "react";
import { type ComponentType, useCallback } from "react";

interface SecondaryNavItem {
  external?: boolean;
  icon: LucideIcon;
  title: string;
  translationKey: string;
  url: string;
}

interface SecondaryNavProps
  extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: SecondaryNavItem[];
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

export function SecondaryNav({
  items,
  pathname,
  LinkComponent = "a",
  ...props
}: SecondaryNavProps) {
  const { isMobile, setOpenMobile } = useSidebar();
  const t = useTranslations("Navigation");

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, setOpenMobile]);

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active =
              pathname === item.url ||
              (item.url !== "/" && pathname.startsWith(item.url));
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild={true} isActive={active} size="sm">
                  <LinkComponent
                    data-active={active}
                    data-tooltip={t(item.translationKey)}
                    href={item.url}
                    onClick={handleLinkClick}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    <item.icon />
                    <span>{t(item.translationKey)}</span>
                  </LinkComponent>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
