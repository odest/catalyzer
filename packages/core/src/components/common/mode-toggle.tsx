"use client";

import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { useTranslations } from "@workspace/i18n";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, handleThemeChange } = useThemeTransition();
  const t = useTranslations("ModeCard");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button size="icon" variant="ghost">
          <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="hidden min-w-40 md:block">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={theme}>
            <DropdownMenuRadioItem
              onClick={(e) => handleThemeChange("light", e)}
              value="light"
            >
              <Sun className="mr-2 size-4" />
              {t("light")}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              onClick={(e) => handleThemeChange("dark", e)}
              value="dark"
            >
              <Moon className="mr-2 size-4" />
              {t("dark")}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              onClick={(e) => handleThemeChange("system", e)}
              value="system"
            >
              <Laptop className="mr-2 size-4" />
              {t("system")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
