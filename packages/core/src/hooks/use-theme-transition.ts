"use client";

import { useTheme } from "next-themes";

type ThemeOption = "light" | "dark" | "system";

export function useThemeTransition() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (
    newTheme: ThemeOption,
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const root = document.documentElement;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    if (event) {
      const { clientX: x, clientY: y } = event;
      root.style.setProperty("--x", `${x}px`);
      root.style.setProperty("--y", `${y}px`);
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return {
    theme,
    resolvedTheme,
    handleThemeChange,
  };
}
