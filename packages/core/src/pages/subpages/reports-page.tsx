"use client";

import { useTranslations } from "@workspace/i18n";

export function ReportsPage() {
  const t = useTranslations("ReportsPage");

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <h1 className="text-balance text-center font-bold text-xl">
        {t("title")}
      </h1>
    </div>
  );
}
