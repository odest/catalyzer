"use client";

import { SettingsCardSkeleton } from "@workspace/core/components/common/settings-card-skeleton";
import { useMounted } from "@workspace/core/hooks/use-mounted";
import { useSidebarStore } from "@workspace/core/stores/sidebar-store";
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
import { Layout, LayoutTemplate, PanelLeft } from "lucide-react";
import { useMemo } from "react";

export const SidebarVariantCard = () => {
  const mounted = useMounted();
  const { variant: sidebarVariant, setVariant: setSidebarVariant } =
    useSidebarStore();
  const { state } = useSidebar();
  const t = useTranslations("SidebarVariantCard");

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
              setSidebarVariant(val as "sidebar" | "floating" | "inset")
            }
            value={sidebarVariant}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="sidebar">
                <div className="flex items-center gap-2">
                  <PanelLeft className="size-4" />
                  <span>{t("sidebar")}</span>
                </div>
              </SelectItem>
              <SelectItem value="floating">
                <div className="flex items-center gap-2">
                  <Layout className="size-4" />
                  <span>{t("floating")}</span>
                </div>
              </SelectItem>
              <SelectItem value="inset">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="size-4" />
                  <span>{t("inset")}</span>
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
            setSidebarVariant(val as "sidebar" | "floating" | "inset")
          }
          value={sidebarVariant}
        >
          <div className="flex flex-col gap-3">
            <label
              className="block w-full cursor-pointer"
              htmlFor="variant-sidebar"
            >
              <div className="relative w-full">
                <div className="aspect-video overflow-hidden rounded-lg border-2 border-border bg-background transition-colors">
                  <div className="h-5 border-b bg-muted" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  <div className="flex h-full">
                    <div className="h-[calc(100%-1.2rem)] w-12 border-r bg-muted">
                      <div className="flex h-full flex-col justify-between p-1">
                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>

                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-2">
                      <div className="space-y-1">
                        <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="variant-sidebar" value="sidebar" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="variant-sidebar"
              >
                {t("sidebar")}
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="block w-full cursor-pointer"
              htmlFor="variant-floating"
            >
              <div className="relative w-full">
                <div className="aspect-video overflow-hidden rounded-lg border-2 border-border bg-background transition-colors">
                  <div className="h-5 border-b bg-muted" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  <div className="flex h-full p-1">
                    <div className="mr-1 h-[calc(100%-1.3rem)] w-12 rounded-md border bg-muted">
                      <div className="flex h-full flex-col justify-between p-1">
                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>

                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 rounded-md bg-background p-1">
                      <div className="space-y-1">
                        <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="variant-floating" value="floating" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="variant-floating"
              >
                {t("floating")}
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="block w-full cursor-pointer"
              htmlFor="variant-inset"
            >
              <div className="relative w-full">
                <div className="aspect-video overflow-hidden rounded-lg border-2 border-border bg-muted transition-colors">
                  <div className="h-5 border-b bg-muted" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  <div className="flex h-full">
                    <div className="h-[calc(100%-1.3rem)] w-12 bg-muted">
                      <div className="mt-1 flex h-full flex-col justify-between p-1 pb-2">
                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>

                        <div className="space-y-1">
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                          <div className="h-1.5 rounded bg-muted-foreground/30" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-1 mr-1 h-[calc(100%-1.7rem)] flex-1 rounded-md border border-border bg-background p-2">
                      <div className="space-y-1">
                        <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="variant-inset" value="inset" />
              <Label
                className="cursor-pointer font-medium"
                htmlFor="variant-inset"
              >
                {t("inset")}
              </Label>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
