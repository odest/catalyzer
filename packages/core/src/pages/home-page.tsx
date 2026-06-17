"use client";

import { Greet } from "@workspace/core/components/common/greet";
import { useTranslations } from "@workspace/i18n";

export function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-balance text-center font-bold text-xl">
        {t("title")}
      </h1>
      <Greet />
    </div>
  );
}
