"use client";

import { LanguageToggle } from "@workspace/core/components/common/language-toggle";
import { ModeToggle } from "@workspace/core/components/common/mode-toggle";
import { NotificationCenter } from "@workspace/core/components/common/notification-center";
import { navigationData } from "@workspace/core/config/navigation";
import { formatHotkeyDisplay } from "@workspace/core/lib/utils";
import { useCommandPaletteStore } from "@workspace/core/stores/command-palette-store";
import { useTranslations } from "@workspace/i18n";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import { Kbd } from "@workspace/ui/components/kbd";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { Search } from "lucide-react";
import { type ComponentType, Fragment } from "react";

function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface AppHeaderProps {
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

export function AppHeader({ pathname, LinkComponent = "a" }: AppHeaderProps) {
  const segments = pathname
    .split("/")
    .filter((s) => Boolean(s) && s !== "home");
  const t = useTranslations("Navigation");
  const isHome = pathname === "/home" || pathname === "/";
  const getBreadcrumbHref = (href: string) => {
    const navItem = navigationData.navMain.find((item) => item.url === href);
    return navItem?.href ?? href;
  };
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);

  return (
    <header className="hidden h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:flex">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          className="mx-2 data-vertical:h-4 data-vertical:self-center"
          orientation="vertical"
        />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              {isHome ? (
                <BreadcrumbPage>{t("home")}</BreadcrumbPage>
              ) : (
                <LinkComponent href="/home">{t("home")}</LinkComponent>
              )}
            </BreadcrumbItem>

            {segments.map((segment, index) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const breadcrumbHref = getBreadcrumbHref(href);
              const isLast = index === segments.length - 1;
              // Try to get translation, fallback to formatted segment
              const displayText =
                t(segment) === segment ? formatSegment(segment) : t(segment);

              return (
                <Fragment key={href}>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{displayText}</BreadcrumbPage>
                    ) : (
                      <LinkComponent
                        className="hidden md:block"
                        href={breadcrumbHref}
                      >
                        {displayText}
                      </LinkComponent>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-1">
          <Button
            className="hidden w-64 justify-between lg:flex"
            onClick={toggleCommandPalette}
            size="sm"
            variant="outline"
          >
            <span className="flex items-center gap-2">
              <Search className="size-4 text-muted-foreground" />
              <span className="font-normal text-muted-foreground">
                {t("search")}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <Kbd>{formatHotkeyDisplay("mod")}</Kbd>
              <Kbd>K</Kbd>
            </span>
          </Button>
          <Button
            className="flex lg:hidden"
            onClick={toggleCommandPalette}
            size="icon"
            variant="ghost"
          >
            <Search className="size-4" />
          </Button>
          <Separator
            className="mx-2 hidden data-vertical:h-4 data-vertical:self-center lg:block"
            orientation="vertical"
          />
          <NotificationCenter />
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
