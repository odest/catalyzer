"use client";

import { useCommandPaletteStore } from "@workspace/core/stores/command-palette-store";
import { useProfileDrawerStore } from "@workspace/core/stores/profile-drawer-store";
import { useTranslations } from "@workspace/i18n";
import { BorderBeam } from "@workspace/ui/components/landing/border-beam";
import { cn } from "@workspace/ui/lib/utils";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ComponentType } from "react";

export interface MobileBottomNavItem {
  href?: string;
  icon: LucideIcon;
  isActive?: boolean;
  title: string;
  translationKey: string;
  url: string;
}

export interface MobileBottomNavProps {
  className?: string;
  items: MobileBottomNavItem[];
  LinkComponent?:
    | ComponentType<{
        href: string;
        children: React.ReactNode;
        onClick?: () => void;
        className?: string;
      }>
    | "a";
  pathname: string;
}

const buttonVariants = {
  initial: { gap: 0 },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = {
  delay: 0.1,
  type: "spring" as const,
  bounce: 0,
  duration: 0.6,
};

export function MobileBottomNav({
  items,
  pathname,
  className,
  LinkComponent = "a",
}: MobileBottomNavProps) {
  const t = useTranslations("Navigation");
  const { open: openCommandPalette } = useCommandPaletteStore();
  const { open: openProfileDrawer } = useProfileDrawerStore();

  return (
    <nav
      className={cn(
        "fixed z-50 flex h-16 items-center justify-between md:hidden",
        "bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]",
        "right-4 left-4 mx-auto max-w-[400px]",
        "p-2",
        "rounded-full border border-border",
        "bg-background/80 backdrop-blur-2xl",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05),0_12px_24px_-4px_rgba(0,0,0,0.15)]",
        "dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.4)]",
        "[-webkit-tap-highlight-color:transparent]",
        "transform-gpu",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.url ||
          (item.url !== "/" && pathname.startsWith(item.url));
        const href = item.href ?? item.url;

        const handleClick = (e?: { preventDefault?: () => void }) => {
          if (item.url === "#search") {
            e?.preventDefault?.();
            openCommandPalette();
          }
          if (item.url === "#profile") {
            e?.preventDefault?.();
            openProfileDrawer();
          }
        };

        return (
          <LinkComponent
            className={cn(
              "flex h-full items-center justify-center outline-none",
              isActive ? "min-w-0 shrink" : "shrink-0"
            )}
            href={href}
            key={item.url}
            onClick={handleClick}
          >
            <motion.div
              animate="animate"
              className={cn(
                "relative flex h-full items-center justify-center rounded-full px-3.5 font-medium text-sm transition-colors duration-300",
                isActive
                  ? "min-w-0 text-foreground"
                  : "shrink-0 text-muted-foreground hover:text-foreground"
              )}
              custom={isActive}
              initial={false}
              transition={transition}
              variants={buttonVariants}
              whileTap={{ scale: 0.85 }}
            >
              {isActive && (
                <motion.div
                  className={cn(
                    "absolute inset-0 z-0 rounded-full",
                    "bg-linear-to-b from-foreground/5 to-foreground/10",
                    "border border-border/50",
                    "shadow-[inset_0_-1px_0_var(--color-border)]"
                  )}
                  layoutId="mobile-nav-active-pill"
                  transition={transition}
                >
                  <BorderBeam
                    className="from-transparent via-primary to-transparent"
                    duration={5}
                    size={50}
                  />
                </motion.div>
              )}

              <Icon
                className={cn(
                  "relative z-10 h-5 w-5 shrink-0 transition-colors duration-300",
                  isActive ? "stroke-[2.5px]" : "stroke-2"
                )}
              />
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.span
                    animate="animate"
                    className="relative z-10 block min-w-0 truncate font-semibold text-sm"
                    exit="exit"
                    initial="initial"
                    transition={transition}
                    variants={spanVariants}
                  >
                    {t(item.translationKey as Parameters<typeof t>[0])}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </LinkComponent>
        );
      })}
    </nav>
  );
}
