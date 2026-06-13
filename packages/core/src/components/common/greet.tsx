"use client";

import { invoke, isTauri } from "@tauri-apps/api/core";
import { useTranslations } from "@workspace/i18n";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import { useState } from "react";
import { toast } from "sonner";

interface GreetResponse {
  message_key: string;
  name: string;
  source: string;
}

export const Greet = () => {
  const [name, setName] = useState("");
  const t = useTranslations("Greet");
  const isMobile = useIsMobile();

  const toastPosition = isMobile ? "top-center" : "bottom-right";

  const handleGreet = () => {
    if (!name || name.trim() === "") {
      toast.warning(t("missingName"), {
        description: t("missingNameDesc"),
        position: toastPosition,
      });
      return;
    }

    const fetchGreeting = async (): Promise<GreetResponse> => {
      await new Promise((res) => setTimeout(res, 1000));

      if (isTauri()) {
        return await invoke<GreetResponse>("greet", { name });
      }

      const response = await fetch("/api/greet", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    };

    toast.promise(fetchGreeting(), {
      loading: isTauri() ? t("loadingTauri") : t("loadingWeb"),
      success: (data: GreetResponse) => {
        const translationKey = data.message_key as Parameters<typeof t>[0];

        return t(translationKey, {
          name: data.name,
          source: data.source,
        });
      },
      error: t("error"),
      position: toastPosition,
    });

    setName("");
  };

  return (
    <div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleGreet();
        }}
      >
        <Input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder={t("placeholder")}
          value={name}
        />
        <Button type="submit">{t("button")}</Button>
      </form>
    </div>
  );
};
