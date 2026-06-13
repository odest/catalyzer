"use client";

import { hotkeys } from "@workspace/core/config/hotkeys";
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { useCommandPaletteStore } from "@workspace/core/stores/command-palette-store";
import { useHotkeysDialogStore } from "@workspace/core/stores/hotkeys-store";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { useHotkeys } from "react-hotkeys-hook";

interface UseAppHotkeysOptions {
  navigate: (path: string) => void;
}

export function useAppHotkeys({ navigate }: UseAppHotkeysOptions) {
  const { toggleSidebar } = useSidebar();
  const { theme, handleThemeChange } = useThemeTransition();
  const toggleHotkeysDialog = useHotkeysDialogStore((s) => s.toggle);
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);

  const getKeys = (id: string) => hotkeys.find((h) => h.id === id)?.keys || "";

  // Command Palette
  useHotkeys(
    getKeys("command-palette"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      toggleCommandPalette();
    },
    { enableOnFormTags: false, delimiter: "|" }
  );

  // Toggle Theme
  useHotkeys(
    getKeys("toggle-mode"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      handleThemeChange(
        (theme === "dark" ? "light" : "dark") as "light" | "dark"
      );
    },
    { enableOnFormTags: false }
  );

  // Toggle Sidebar
  useHotkeys(
    getKeys("toggle-sidebar"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    },
    {
      enableOnFormTags: false,
      delimiter: "|",
      eventListenerOptions: {
        capture: true,
      },
    }
  );

  // Go to Home
  useHotkeys(
    getKeys("go-home"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/home");
    },
    { enableOnFormTags: false }
  );
  // Go to Dashboard
  useHotkeys(
    getKeys("go-dashboard"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/dashboard/overview");
    },
    { enableOnFormTags: false }
  );
  // Go to Analytics
  useHotkeys(
    getKeys("go-analytics"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/dashboard/analytics");
    },
    { enableOnFormTags: false }
  );
  // Go to Overview
  useHotkeys(
    getKeys("go-overview"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/dashboard/overview");
    },
    { enableOnFormTags: false }
  );
  // Go to Reports
  useHotkeys(
    getKeys("go-reports"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/dashboard/reports");
    },
    { enableOnFormTags: false }
  );
  // Go to Settings
  useHotkeys(
    getKeys("go-settings"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      navigate("/settings");
    },
    { enableOnFormTags: false }
  );

  // Show Keyboard Shortcuts
  useHotkeys(
    getKeys("show-hotkeys"),
    (e: KeyboardEvent) => {
      e.preventDefault();
      toggleHotkeysDialog();
    },
    { enableOnFormTags: false, useKey: true }
  );
}
