"use client";

import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import { LanguageCard } from "@workspace/core/components/common/language-card";
import { ModeCard } from "@workspace/core/components/common/mode-card";
import { SidebarVariantCard } from "@workspace/core/components/common/sidebar-variant-card";
import { ThemesList } from "@workspace/core/components/common/themes-list";

export function SettingsPage() {
  return (
    <ScrollArea className="w-full overflow-y-auto">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 p-4 pb-28 md:pb-4">
        <LanguageCard />
        <ModeCard />
        <div className="hidden md:block">
          <SidebarVariantCard />
        </div>
        <ThemesList />
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
