"use client";

import { ModeSwitch } from "@workspace/core/components/common/mode-switch";
import { siteConfig } from "@workspace/core/config/site";
import { AnimatedContainer } from "@workspace/ui/components/landing/animated-container";
import { BorderBeam } from "@workspace/ui/components/landing/border-beam";
import { Logo } from "@workspace/ui/components/landing/logo";
import { TextHoverEffect } from "@workspace/ui/components/landing/text-hover-effect";
import { cn } from "@workspace/ui/lib/utils";
import {
  BugIcon,
  GithubIcon,
  GitPullRequestIcon,
  MessageSquareIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface FooterLink {
  href: string;
  icon?: ReactNode;
  isExternal: boolean;
  title: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Pricing", href: "/", isExternal: false },
      { title: "Features", href: "/", isExternal: false },
      { title: "Download", href: "/download", isExternal: false },
      { title: "Showcase", href: "/", isExternal: false },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Documentation", href: "/docs", isExternal: false },
      { title: "Quick Start", href: "/docs/quick-start", isExternal: false },
      {
        title: "Architecture",
        href: "/docs/architecture/overview",
        isExternal: false,
      },
      {
        title: "Changelog",
        href: siteConfig.links.changelog,
        isExternal: true,
      },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy Policy", href: "/", isExternal: false },
      { title: "Terms of Service", href: "/", isExternal: false },
      { title: "Security", href: "/", isExternal: false },
      {
        title: "License",
        href: siteConfig.links.license,
        isExternal: true,
      },
    ],
  },
  {
    label: "Community",
    links: [
      {
        title: "GitHub",
        href: siteConfig.links.github,
        isExternal: true,
        icon: <GithubIcon className="h-4 w-4" />,
      },
      {
        title: "Contribute",
        href: siteConfig.links.contributing,
        isExternal: true,
        icon: <GitPullRequestIcon className="h-4 w-4" />,
      },
      {
        title: "Discussions",
        href: siteConfig.links.discussions,
        isExternal: true,
        icon: <MessageSquareIcon className="h-4 w-4" />,
      },
      {
        title: "Report an Issue",
        href: siteConfig.links.issues,
        isExternal: true,
        icon: <BugIcon className="h-4 w-4" />,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className={cn(
        "relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-t-4xl border-t px-6 md:rounded-t-6xl md:px-8",
        "dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]"
      )}
    >
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

      <div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
        <AnimatedContainer className="space-y-4">
          <Link href="/">
            <div className="flex flex-row items-center gap-2">
              <Logo className="size-8!" />
              <h2 className="font-bold text-xl">{siteConfig.name}</h2>
            </div>
          </Link>
          <p className="mt-4 text-muted-foreground text-sm">
            {siteConfig.headline}
          </p>
          <ModeSwitch />
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        className="inline-flex items-center duration-250 hover:text-foreground [&_svg]:me-1 [&_svg]:size-4"
                        href={link.href}
                        key={`${section.label}-${link.title}`}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                        target={link.isExternal ? "_blank" : "_self"}
                      >
                        {link.icon}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center overflow-hidden">
        <TextHoverEffect text={siteConfig.name.toUpperCase()} />
      </div>
      <BorderBeam
        className="from-transparent via-primary to-transparent"
        duration={6}
        size={200}
      />
    </footer>
  );
}
