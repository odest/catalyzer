"use client";

import { navigationData } from "@workspace/core/config/navigation";
import { useTranslations } from "@workspace/i18n";
import { usePathname, useRouter } from "@workspace/i18n/navigation";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";

const DASHBOARD_ITEMS =
  navigationData.navMain.find((item) => item.url === "/dashboard")?.items ?? [];

export function DashboardTabsNav() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");

  const activeTab = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return (
    <div className="flex justify-center md:hidden">
      <Tabs
        onValueChange={(nextValue) => {
          if (nextValue !== pathname) {
            router.push(nextValue);
          }
        }}
        value={activeTab}
      >
        <TabsList variant="line">
          {DASHBOARD_ITEMS.map((item) => (
            <TabsTrigger
              className="after:bg-primary"
              key={item.url}
              value={item.url}
            >
              {t(item.translationKey)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
