"use client";

import { useEffect } from "react";

export function useDrawerHistory(
  isOpen: boolean,
  onOpenChange: (open: boolean) => void
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.history.pushState({ drawer: "open" }, "");

    const handlePopState = () => {
      onOpenChange(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (window.history.state?.drawer === "open") {
        window.history.back();
      }
    };
  }, [isOpen, onOpenChange]);
}
