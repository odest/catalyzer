"use client";

import { useLanguageSwitcher } from "@workspace/core/hooks/use-language-switcher";
import { useTranslations } from "@workspace/i18n";
import { localeConfig, routing } from "@workspace/i18n/routing";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

export function LanguageCard() {
  const { locale, currentConfig, isPending, changeLanguage } =
    useLanguageSwitcher();
  const t = useTranslations("LanguageCard");

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              {t("title")}
            </div>
            <div className="text-muted-foreground text-sm">
              {t("description")}
            </div>
          </div>
          <Select
            disabled={isPending}
            onValueChange={changeLanguage}
            value={locale}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <span className="text-base">{currentConfig.flag}</span>
                  <span>{currentConfig.nativeName}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent position="popper">
              {routing.locales.map((loc) => {
                const config = localeConfig[loc as keyof typeof localeConfig];

                return (
                  <SelectItem key={loc} value={loc}>
                    <div className="flex w-full items-center gap-2">
                      <span className="text-base">{config.flag}</span>
                      <span>{config.nativeName}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
