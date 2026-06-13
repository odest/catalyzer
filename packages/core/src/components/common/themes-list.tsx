"use client";

import { ThemeCard } from "@workspace/core/components/common/theme-card";
import { themes } from "@workspace/core/config/themes";
import { useMounted } from "@workspace/core/hooks/use-mounted";
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { useThemeStore } from "@workspace/core/stores/theme-store";
import { useTranslations } from "@workspace/i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Skeleton } from "@workspace/ui/components/skeleton";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowUpDown,
  Search,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export const ThemesList = () => {
  const { theme: activeMode, resolvedTheme } = useThemeTransition();
  const mounted = useMounted();
  const t = useTranslations("ThemesList");

  const [filteredThemes, setFilteredThemes] = useState(themes);
  const [searchTerm, setSearchTerm] = useState("");
  const { sortOption, setSortOption } = useThemeStore();

  useEffect(() => {
    const filtered = themes.filter((theme) =>
      theme.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "az":
          return (a.name || "").localeCompare(b.name || "");
        case "za":
          return (b.name || "").localeCompare(a.name || "");
        default:
          return 0;
      }
    });

    setFilteredThemes(sorted);
  }, [searchTerm, sortOption]);

  if (!mounted) {
    return (
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <Skeleton className="mb-2 h-6 w-20" />
              <Skeleton className="h-4 w-48" />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row md:items-center">
              <div className="relative flex-1">
                <Skeleton className="h-9 w-full min-w-[140px] max-w-full rounded-md" />
              </div>
              <Skeleton className="h-9 w-full rounded-md sm:w-40 md:w-[180px]" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {[...new Array(6)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Skeletons don't need unique keys
              <div className="space-y-3" key={i}>
                <Skeleton className="aspect-video rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:items-center">
            <div className="relative flex-1">
              <InputGroup>
                <InputGroupInput
                  className="w-full min-w-[140px] max-w-full text-ellipsis break-all"
                  id="inline-start-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  value={searchTerm}
                />
                <InputGroupAddon align="inline-start">
                  <Search className="text-muted-foreground" />
                </InputGroupAddon>
                {searchTerm && (
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      aria-label="Copy"
                      onClick={() => setSearchTerm("")}
                      size="icon-xs"
                      title="Copy"
                    >
                      <XCircle />
                    </InputGroupButton>
                  </InputGroupAddon>
                )}
              </InputGroup>
            </div>

            <Select onValueChange={setSortOption} value={sortOption}>
              <SelectTrigger className="w-full gap-2 sm:w-40 md:w-[180px]">
                <SelectValue placeholder={t("sortBy")} />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="default">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  {t("sortDefault")}
                </SelectItem>
                <SelectItem value="az">
                  <ArrowDownAZ className="mr-2 h-4 w-4" />
                  {t("sortAZ")}
                </SelectItem>
                <SelectItem value="za">
                  <ArrowUpAZ className="mr-2 h-4 w-4" />
                  {t("sortZA")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {filteredThemes.length === 0 && searchTerm ? (
          <Empty className="border border-dashed">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Search />
              </EmptyMedia>
              <EmptyTitle>{t("noThemesTitle")}</EmptyTitle>
              <EmptyDescription>{t("noThemesDescription")}</EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {filteredThemes.map((theme) => (
              <ThemeCard
                key={theme.name}
                palette={
                  (activeMode === "system" ? resolvedTheme : activeMode) ===
                  "dark"
                    ? theme.darkPalette
                    : theme.lightPalette
                }
                themeLabel={theme.label}
                themeName={theme.name}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
