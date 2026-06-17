"use client";

import { hotkeys } from "@workspace/core/config/hotkeys";
import { themes } from "@workspace/core/config/themes";
import { useDrawerHistory } from "@workspace/core/hooks/use-drawer-history";
import { useLanguageSwitcher } from "@workspace/core/hooks/use-language-switcher";
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { formatHotkeyDisplay } from "@workspace/core/lib/utils";
import { useCommandPaletteStore } from "@workspace/core/stores/command-palette-store";
import { useHotkeysDialogStore } from "@workspace/core/stores/hotkeys-store";
import { useSidebarStore } from "@workspace/core/stores/sidebar-store";
import { useThemeStore } from "@workspace/core/stores/theme-store";
import { useTranslations } from "@workspace/i18n";
import { localeConfig, routing } from "@workspace/i18n/routing";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer";
import { Kbd } from "@workspace/ui/components/kbd";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import { cn } from "@workspace/ui/lib/utils";
import {
  Check,
  CornerDownLeftIcon,
  FileText,
  Home,
  Keyboard,
  LayoutDashboard,
  LayoutTemplate,
  LineChart,
  Moon,
  MoveDown,
  MoveUp,
  Palette,
  PanelLeft,
  Settings,
  Sun,
  View,
} from "lucide-react";
import React, { useCallback } from "react";

function CommandMenuItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  "data-selected"?: string;
  "aria-selected"?: string;
}) {
  return (
    <CommandItem
      className={cn(
        "h-9 rounded-md border border-transparent px-3! font-medium data-[selected=true]:border-input data-[selected=true]:bg-input/50",
        className
      )}
      {...props}
    >
      {children}
    </CommandItem>
  );
}

export function CommandPalette({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const t = useTranslations("CommandPalette");
  const { isOpen, close } = useCommandPaletteStore();
  useDrawerHistory(isOpen, close);
  const isMobile = useIsMobile();
  const {
    theme: activeMode,
    resolvedTheme,
    handleThemeChange,
  } = useThemeTransition();
  const { toggleSidebar } = useSidebar();
  const { variant, setVariant } = useSidebarStore();
  const { selectedTheme, setSelectedTheme } = useThemeStore();
  const toggleHotkeysDialog = useHotkeysDialogStore((s) => s.toggle);
  const { locale, isPending, changeLanguage } = useLanguageSwitcher();

  const runCommand = useCallback(
    (command: () => unknown) => {
      close();
      setTimeout(() => {
        command();
      }, 300);
    },
    [close]
  );

  const getKeysDisplay = (id: string) => {
    const hk = hotkeys.find((h) => h.id === id);
    if (!hk) {
      return null;
    }
    const keys = formatHotkeyDisplay(hk.keys);
    const isSequence = hk.keys.includes(">");
    return (
      <CommandShortcut className="ml-auto hidden items-center gap-1 md:flex">
        {keys.map((key, i) => (
          <React.Fragment key={key}>
            <Kbd>{key}</Kbd>
            {isSequence && i < keys.length - 1 && (
              <span className="mx-1.5 font-mono text-[10px] text-muted-foreground opacity-70">
                {t("then")}
              </span>
            )}
          </React.Fragment>
        ))}
      </CommandShortcut>
    );
  };

  const groupClasses =
    "p-0! **:[[cmdk-group-heading]]:scroll-mt-16 **:[[cmdk-group-heading]]:p-3! **:[[cmdk-group-heading]]:pb-1!";

  const paletteContent = (
    <>
      <Command
        className={cn(
          "rounded-none bg-transparent p-2",
          "**:data-[slot=command-input-wrapper]:p-0!",
          "**:data-[slot=command-input]:h-9! **:data-[slot=command-input]:py-0",
          "**:data-[slot=input-group]:h-9! **:data-[slot=input-group]:rounded-md **:data-[slot=input-group]:border-input **:data-[slot=input-group]:bg-input/50",
          isMobile && "h-full"
        )}
      >
        <CommandInput autoFocus={true} placeholder={t("search")} />
        <CommandList
          className={cn(
            "no-scrollbar scroll-pt-2 scroll-pb-1.5",
            isMobile ? "max-h-none min-h-0 flex-1" : "min-h-80"
          )}
        >
          <CommandEmpty className="py-12 text-center text-muted-foreground text-sm">
            {t("noResults")}
          </CommandEmpty>

          <CommandGroup className={groupClasses} heading={t("general")}>
            <CommandMenuItem
              onSelect={() =>
                runCommand(() =>
                  handleThemeChange(
                    (activeMode === "dark" ? "light" : "dark") as
                      | "light"
                      | "dark"
                  )
                )
              }
              value="system dark light theme mode"
            >
              {activeMode === "dark" ? <Moon /> : <Sun />}
              <span>{t("toggleMode")}</span>
              {getKeysDisplay("toggle-mode")}
            </CommandMenuItem>

            {!isMobile && (
              <CommandMenuItem
                onSelect={() => runCommand(() => toggleSidebar())}
              >
                <PanelLeft />
                <span>{t("toggleSidebar")}</span>
                {getKeysDisplay("toggle-sidebar")}
              </CommandMenuItem>
            )}

            {!isMobile && (
              <CommandMenuItem
                onSelect={() => runCommand(() => toggleHotkeysDialog())}
              >
                <Keyboard />
                <span>{t("showHotkeys")}</span>
                {getKeysDisplay("show-hotkeys")}
              </CommandMenuItem>
            )}
          </CommandGroup>

          <CommandSeparator className="my-2" />

          <CommandGroup className={groupClasses} heading={t("navigation")}>
            <CommandMenuItem
              onSelect={() => runCommand(() => navigate("/home"))}
            >
              <Home />
              <span>{t("goHome")}</span>
              {getKeysDisplay("go-home")}
            </CommandMenuItem>
            <CommandMenuItem
              onSelect={() => runCommand(() => navigate("/dashboard/overview"))}
            >
              <LayoutDashboard />
              <span>{t("goDashboard")}</span>
              {getKeysDisplay("go-dashboard")}
            </CommandMenuItem>
            <CommandMenuItem
              onSelect={() => runCommand(() => navigate("/dashboard/overview"))}
            >
              <View />
              <span>{t("goOverview")}</span>
              {getKeysDisplay("go-overview")}
            </CommandMenuItem>
            <CommandMenuItem
              onSelect={() =>
                runCommand(() => navigate("/dashboard/analytics"))
              }
            >
              <LineChart />
              <span>{t("goAnalytics")}</span>
              {getKeysDisplay("go-analytics")}
            </CommandMenuItem>
            <CommandMenuItem
              onSelect={() => runCommand(() => navigate("/dashboard/reports"))}
            >
              <FileText />
              <span>{t("goReports")}</span>
              {getKeysDisplay("go-reports")}
            </CommandMenuItem>
            <CommandMenuItem
              onSelect={() => runCommand(() => navigate("/settings"))}
            >
              <Settings />
              <span>{t("goSettings")}</span>
              {getKeysDisplay("go-settings")}
            </CommandMenuItem>
          </CommandGroup>

          <CommandSeparator className="my-2" />

          <CommandGroup className={groupClasses} heading={t("language")}>
            {routing.locales.map((loc) => {
              const config = localeConfig[loc as keyof typeof localeConfig];
              return (
                <CommandMenuItem
                  data-checked={locale === loc}
                  disabled={isPending}
                  key={loc}
                  onSelect={() => runCommand(() => changeLanguage(loc))}
                  value={`${config.nativeName} ${config.label}`}
                >
                  <span className="mr-2 text-base">{config.flag}</span>
                  <span>{config.nativeName}</span>
                </CommandMenuItem>
              );
            })}
          </CommandGroup>

          {!isMobile && (
            <>
              <CommandSeparator className="my-2" />
              <CommandGroup
                className={groupClasses}
                heading={t("sidebarVariants")}
              >
                {(["sidebar", "floating", "inset"] as const).map(
                  (sidebarVariant) => (
                    <CommandMenuItem
                      data-checked={variant === sidebarVariant}
                      key={sidebarVariant}
                      onSelect={() =>
                        runCommand(() => setVariant(sidebarVariant))
                      }
                    >
                      <LayoutTemplate />
                      <span className="capitalize">{t(sidebarVariant)}</span>
                    </CommandMenuItem>
                  )
                )}
              </CommandGroup>
            </>
          )}

          <CommandSeparator className="my-2" />

          <CommandGroup className={groupClasses} heading={t("themes")}>
            {themes.map((themeItem) => {
              const palette =
                (activeMode === "system" ? resolvedTheme : activeMode) ===
                "dark"
                  ? themeItem.darkPalette
                  : themeItem.lightPalette;
              return (
                <CommandMenuItem
                  key={themeItem.name}
                  onSelect={() =>
                    runCommand(() => setSelectedTheme(themeItem.name))
                  }
                >
                  {selectedTheme === themeItem.name ? <Check /> : <Palette />}
                  <span>{themeItem.label}</span>
                  <div className="ml-auto flex items-center gap-1">
                    {palette.slice(0, 5).map((color, index) => {
                      return (
                        <div
                          className="h-3 w-3 rounded-full border border-border"
                          data-slot="command-shortcut"
                          // biome-ignore lint/suspicious/noArrayIndexKey: Decorative static color list
                          key={`${themeItem.name}-${index}`}
                          style={{ backgroundColor: color }}
                        />
                      );
                    })}
                  </div>
                </CommandMenuItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>

      <div className="absolute inset-x-0 bottom-0 z-20 hidden h-10 items-center justify-between rounded-b-xl border-border border-t bg-muted/50 px-4 font-medium text-muted-foreground text-xs md:flex">
        <div className="flex items-center gap-2">
          <Kbd>
            <MoveUp />
          </Kbd>
          <Kbd>
            <MoveDown />
          </Kbd>
          <span>{t("navigate")}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
          <span>{t("openOrSelect")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Kbd>Esc</Kbd>
          <span>{t("close")}</span>
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer onOpenChange={(open) => !open && close()} open={isOpen}>
        <DrawerContent
          className="h-[96dvh] overflow-hidden"
          onOpenAutoFocus={(e: Event) => e.preventDefault()}
        >
          <DrawerHeader className="sr-only">
            <DrawerTitle>{t("commandPalette")}</DrawerTitle>
            <DrawerDescription>{t("search")}</DrawerDescription>
          </DrawerHeader>
          {paletteContent}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog onOpenChange={(open) => !open && close()} open={isOpen}>
      <DialogContent
        className="top-[15%] translate-y-0 overflow-hidden rounded-xl border-none bg-background bg-clip-padding p-0 pb-10 shadow-2xl ring-4 ring-border/80 sm:max-w-lg"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{t("commandPalette")}</DialogTitle>
          <DialogDescription>{t("search")}</DialogDescription>
        </DialogHeader>
        {paletteContent}
      </DialogContent>
    </Dialog>
  );
}
