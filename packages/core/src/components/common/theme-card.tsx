"use client";

import type { Themes } from "@workspace/core/config/themes";
import { useThemeStore } from "@workspace/core/stores/theme-store";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

interface ThemeCardProps {
  palette: string[];
  themeLabel: string;
  themeName: Themes;
}

const swatchDefinitions = [
  { name: "Primary", index: 0 },
  { name: "Secondary", index: 1 },
  { name: "Accent", index: 2 },
  { name: "Muted", index: 3 },
  { name: "Background", index: 4 },
];

export function ThemeCard({ themeLabel, themeName, palette }: ThemeCardProps) {
  const colorSwatches = swatchDefinitions.map((definition) => ({
    name: definition.name,
    bg: palette[definition.index],
  }));
  const { selectedTheme, setSelectedTheme } = useThemeStore();

  return (
    <Card
      className={cn(
        "gap-0 rounded-lg p-1",
        "[contain-intrinsic-size:200px] [content-visibility:auto]"
      )}
    >
      <div className="relative flex h-36">
        {colorSwatches.map((swatch) => (
          <div
            className={cn(
              "group/swatch relative ml-1 h-full flex-1 rounded-lg border transition-all duration-300 ease-in-out first:ml-0",
              "hover:grow-[1.5]"
            )}
            key={swatch.name + swatch.bg}
            style={{ backgroundColor: swatch.bg }}
          >
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "opacity-0 group-hover/swatch:opacity-100",
                "transition-opacity duration-300 ease-in-out",
                "pointer-events-none -rotate-90 whitespace-nowrap tracking-wider"
              )}
            >
              <span className="rounded-md bg-black/50 px-2 py-0.5 font-medium text-white text-xs shadow-xs backdrop-blur-sm">
                {swatch.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Button
        className={cn(
          "mt-1 h-12 w-full border font-medium text-sm",
          selectedTheme === themeName
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground"
        )}
        onClick={() => setSelectedTheme(themeName)}
      >
        {themeLabel}
      </Button>
    </Card>
  );
}
