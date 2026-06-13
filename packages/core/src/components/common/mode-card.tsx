"use client";

import { SettingsCardSkeleton } from "@workspace/core/components/common/settings-card-skeleton";
import { useMounted } from "@workspace/core/hooks/use-mounted";
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { useTranslations } from "@workspace/i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Label } from "@workspace/ui/components/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { Laptop, Moon, Sun } from "lucide-react";
import { useMemo } from "react";

export const ModeCard = () => {
  const { theme, handleThemeChange } = useThemeTransition();
  const { state } = useSidebar();
  const mounted = useMounted();
  const t = useTranslations("ModeCard");

  const gridClasses = useMemo(
    () =>
      state === "collapsed"
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
    [state]
  );

  if (!mounted) {
    return <SettingsCardSkeleton gridClasses={gridClasses} />;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
        <div className="space-y-1.5">
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </div>

        <div className="shrink-0 md:hidden">
          <Select
            onValueChange={(val) =>
              handleThemeChange(val as "light" | "dark" | "system")
            }
            value={theme}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="light">
                <div className="flex items-center gap-2">
                  <Sun className="size-4" />
                  <span>{t("light")}</span>
                </div>
              </SelectItem>
              <SelectItem value="dark">
                <div className="flex items-center gap-2">
                  <Moon className="size-4" />
                  <span>{t("dark")}</span>
                </div>
              </SelectItem>
              <SelectItem value="system">
                <div className="flex items-center gap-2">
                  <Laptop className="size-4" />
                  <span>{t("system")}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="hidden md:block">
        <RadioGroup
          className={gridClasses}
          onValueChange={(val) =>
            handleThemeChange(val as "light" | "dark" | "system")
          }
          value={theme}
        >
          <div className="flex flex-col gap-3">
            <label
              className="block w-full cursor-pointer"
              htmlFor="theme-light"
            >
              <div className="relative w-full">
                <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-border bg-background transition-colors dark:border-muted-foreground dark:bg-foreground">
                  <div className="h-5 border-border border-b bg-muted dark:border-muted-foreground dark:bg-muted-foreground/30" />
                  <div className="mt-2 space-y-1 p-2">
                    <div className="h-2 w-3/4 rounded bg-muted-foreground/20 dark:bg-muted/30" />
                    <div className="h-2 w-1/2 rounded bg-muted-foreground/20 dark:bg-muted/30" />
                    <div className="h-2 w-2/3 rounded bg-muted-foreground/20 dark:bg-muted/30" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="theme-light" value="light" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="theme-light"
              >
                {t("light")}
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="block w-full cursor-pointer" htmlFor="theme-dark">
              <div className="relative w-full">
                <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-muted-foreground bg-foreground transition-colors dark:border-border dark:bg-background">
                  <div className="h-5 border-muted-foreground border-b bg-muted-foreground/30 dark:border-border dark:bg-muted" />
                  <div className="mt-2 space-y-1 p-2">
                    <div className="h-2 w-3/4 rounded bg-muted/30 dark:bg-muted-foreground/20" />
                    <div className="h-2 w-1/2 rounded bg-muted/30 dark:bg-muted-foreground/20" />
                    <div className="h-2 w-2/3 rounded bg-muted/30 dark:bg-muted-foreground/20" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="theme-dark" value="dark" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="theme-dark"
              >
                {t("dark")}
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="block w-full cursor-pointer"
              htmlFor="theme-system"
            >
              <div className="relative w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg transition-colors">
                  <div className="absolute inset-0 w-1/2 rounded-tl-lg rounded-bl-lg border-2 border-border border-r bg-background dark:border-muted-foreground dark:bg-foreground" />
                  <div className="absolute inset-0 left-1/2 w-1/2 rounded-tr-lg rounded-br-lg border-2 border-muted-foreground border-l bg-foreground dark:border-border dark:bg-background" />

                  <div className="relative">
                    <div className="flex h-5">
                      <div className="w-1/2 rounded-tl-lg border-2 border-border border-r bg-muted dark:border-muted-foreground dark:bg-muted/30" />
                      <div className="w-1/2 rounded-tr-lg border-2 border-muted-foreground border-l bg-muted/30 dark:border-border dark:bg-muted" />
                    </div>
                    <div className="mt-2 space-y-1 p-2">
                      <div className="flex h-2 rounded-full">
                        <div className="w-1/2 rounded-tl-md rounded-bl-md bg-muted-foreground/20 dark:bg-muted/30" />
                        <div className="w-1/4 rounded-tr-md rounded-br-md bg-muted/30 dark:bg-muted-foreground/20" />
                      </div>
                      <div className="flex h-2 rounded-full">
                        <div className="w-1/2 rounded-md bg-muted-foreground/20 dark:bg-muted/30" />
                      </div>
                      <div className="flex h-2 rounded-full">
                        <div className="w-1/2 rounded-tl-md rounded-bl-md bg-muted-foreground/20 dark:bg-muted/30" />
                        <div className="w-1/6 rounded-tr-md rounded-br-md bg-muted/30 dark:bg-muted-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="theme-system" value="system" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="theme-system"
              >
                {t("system")}
              </Label>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
