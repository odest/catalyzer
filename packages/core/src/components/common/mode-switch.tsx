"use client";

import { useMounted } from "@workspace/core/hooks/use-mounted";
import { useThemeTransition } from "@workspace/core/hooks/use-theme-transition";
import { cn } from "@workspace/ui/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";

type Mode = "system" | "light" | "dark";

const modes: { value: Mode; icon: typeof Monitor }[] = [
  { value: "system", icon: Monitor },
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
];

export function ModeSwitch({ className }: { className?: string }) {
  const mounted = useMounted();
  const { theme, handleThemeChange } = useThemeTransition();

  const selected = (theme as Mode) ?? "system";

  if (!mounted) {
    return null;
  }

  return (
    <LayoutGroup>
      <div
        className={cn(
          "inline-flex items-center gap-1 rounded-full border border-border bg-background p-1 backdrop-blur-sm",
          className
        )}
      >
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = selected === mode.value;

          return (
            <button
              aria-label={`Switch to ${mode.value} mode`}
              className={cn(
                "relative z-10 flex size-7 cursor-pointer items-center justify-center rounded-full transition-colors duration-200",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              )}
              key={mode.value}
              onClick={(e) => handleThemeChange(mode.value, e)}
              type="button"
            >
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-background shadow-sm ring-1 ring-border"
                  layoutId="mode-switch-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
