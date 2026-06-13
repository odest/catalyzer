"use client";

import { siteConfig } from "@workspace/core/config/site";
import { Button } from "@workspace/ui/components/button";
import { Logo } from "@workspace/ui/components/landing/logo";
import { cn } from "@workspace/ui/lib/utils";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const menuItems = [
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/" },
  { name: "Download", href: "/download" },
  { name: "Showcase", href: "/" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        className="fixed z-20 w-full px-2"
        data-state={menuState && "active"}
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                aria-label="home"
                className="flex items-center space-x-2"
                href="/"
              >
                <Logo />
              </Link>

              <button
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                onClick={() => setMenuState(!menuState)}
                type="button"
              >
                <Menu className="m-auto size-6 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href={item.href}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 in-data-[state=active]:block hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:in-data-[state=active]:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        href={item.href}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild={true} size="sm">
                  <Link
                    href={siteConfig.links.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github />
                    <span>Star on Github</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
