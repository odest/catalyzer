"use client";

import { siteConfig } from "@workspace/core/config/site";
import { Button } from "@workspace/ui/components/button";
import { AnimatedGroup } from "@workspace/ui/components/landing/animated-group";
import { Logo } from "@workspace/ui/components/landing/logo";
import { TextEffect } from "@workspace/ui/components/landing/text-effect";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { transitionVariants } from "@/lib/animations";
import { detectPlatform, type Platform } from "@/lib/detect-platform";
import type { ReleaseData } from "@/lib/github-releases";
import PlatformCards from "../components/platform-cards";
import { platformConfig } from "./platform-mappings";

interface DownloadContentProps {
  release: ReleaseData | null;
}

export default function DownloadContent({ release }: DownloadContentProps) {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const scrollToPlatforms = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("platforms")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { label, icon, primaryAssetKey } = platformConfig[platform];

  const primaryUrl =
    (release?.assets && primaryAssetKey && release.assets[primaryAssetKey]) ||
    "#";

  return (
    <main className="overflow-hidden">
      <div
        className="absolute inset-0 z-0 text-stone-200 dark:text-white/10"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <section className="pt-24 md:pt-36">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedGroup variants={transitionVariants}>
            <Logo className="mx-auto size-20" />
          </AnimatedGroup>

          <TextEffect
            as="h1"
            className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
            preset="fade-in-blur"
            speedSegment={0.3}
          >
            {`Download ${siteConfig.name}`}
          </TextEffect>
          <TextEffect
            as="p"
            className="mx-auto mt-8 max-w-3xl text-balance text-lg"
            delay={0.5}
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
          >
            Get the latest version for your platform. One codebase for Web,
            Desktop, and Mobile.
          </TextEffect>

          {release?.version && (
            <AnimatedGroup variants={transitionVariants}>
              <p className="mt-4 text-muted-foreground text-sm">
                Latest release: v{release.version}
              </p>
            </AnimatedGroup>
          )}

          <AnimatedGroup
            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <Button
              asChild={true}
              className="cursor-pointer text-base"
              size="lg"
            >
              <Link href={primaryUrl}>
                {icon}
                <span className="text-nowrap">{label}</span>
              </Link>
            </Button>
            <Button
              className="cursor-pointer text-base"
              key={2}
              onClick={scrollToPlatforms}
              size="lg"
              variant="outline"
            >
              <ArrowDown />
              <span className="text-nowrap">Other Platforms</span>
            </Button>
          </AnimatedGroup>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div id="platforms">
            <PlatformCards assets={release?.assets || {}} />
          </div>
        </AnimatedGroup>
      </section>
    </main>
  );
}
