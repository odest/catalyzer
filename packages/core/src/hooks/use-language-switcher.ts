import { useTransition, useEffect } from "react";
import { useLocale } from "@workspace/i18n";
import { usePathname, useRouter } from "@workspace/i18n/navigation";
import { useThemeStore, applyTheme } from "@workspace/core/stores/theme-store";
import { localeConfig } from "@workspace/i18n/routing";

export function useLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { selectedTheme } = useThemeStore();

  const [isPending, startTransition] = useTransition();

  // Preserve theme when switching languages
  useEffect(() => {
    if (!isPending) {
      applyTheme(selectedTheme);
    }
  }, [isPending, selectedTheme]);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale || isPending) {
      return;
    }
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const currentConfig = localeConfig[locale as keyof typeof localeConfig];

  return {
    locale,
    currentConfig,
    isPending,
    changeLanguage,
  };
}
