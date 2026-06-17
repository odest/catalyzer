"use client";

import { useLanguageSwitcher } from "@workspace/core/hooks/use-language-switcher";
import { localeConfig, routing } from "@workspace/i18n/routing";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { locale, isPending, changeLanguage } = useLanguageSwitcher();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button size="icon" variant="ghost">
          <Languages className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="hidden min-w-40 md:block">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup onValueChange={changeLanguage} value={locale}>
            {routing.locales.map((loc) => {
              const config = localeConfig[loc as keyof typeof localeConfig];
              return (
                <DropdownMenuRadioItem
                  disabled={isPending}
                  key={loc}
                  value={loc}
                >
                  <span className="mr-2 text-base">{config.flag}</span>
                  {config.nativeName}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
