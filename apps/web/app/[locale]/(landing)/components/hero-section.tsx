import { siteConfig } from "@workspace/core/config/site";
import { fetchLatestGithubVersion } from "@workspace/core/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { AnimatedGroup } from "@workspace/ui/components/landing/animated-group";
import { BorderBeam } from "@workspace/ui/components/landing/border-beam";
import { LogoCloud } from "@workspace/ui/components/landing/logo-cloud";
import { TextEffect } from "@workspace/ui/components/landing/text-effect";
import { ArrowRight, Play, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { transitionVariants } from "@/lib/animations";

export default function HeroSection() {
  const [latestTag, setLatestTag] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestGithubVersion().then((tag) => {
      if (tag) {
        setLatestTag(tag);
      }
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <div
        aria-hidden={true}
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute top-0 left-0 h-320 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
                  linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                  linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
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
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
          >
            <Image
              alt="background"
              className="hidden size-full dark:block"
              height="4095"
              priority={true}
              src="/night-background.webp"
              width="3276"
            />
          </AnimatedGroup>

          <div
            aria-hidden={true}
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
          />

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
                  href={siteConfig.links.releases}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-foreground text-sm">
                    {siteConfig.name} v{latestTag} Released
                  </span>
                  <span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700" />

                  <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedGroup>

              <TextEffect
                as="h1"
                className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                preset="fade-in-blur"
                speedSegment={0.3}
              >
                {siteConfig.headline}
              </TextEffect>
              <TextEffect
                as="p"
                className="mx-auto mt-8 max-w-3xl text-balance text-lg"
                delay={0.5}
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
              >
                {siteConfig.description}
              </TextEffect>

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
                  <Link href="/home">
                    <Play />
                    <span className="text-nowrap">View Web Demo</span>
                  </Link>
                </Button>
                <Button
                  asChild={true}
                  className="cursor-pointer text-base"
                  key={2}
                  size="lg"
                  variant="outline"
                >
                  <Link href="/docs/quick-start">
                    <Rocket />
                    <span className="text-nowrap">Start Building</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
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
            <div className="mask-b-from-55% relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
              <div className="relative inset-shadow-2xs mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background dark:inset-shadow-white/20">
                <Image
                  alt="app screen"
                  className="relative hidden aspect-15/8 rounded-2xl bg-background mix-blend-luminosity grayscale dark:block"
                  height="1080"
                  src="/app-screen-dark.png"
                  width="1920"
                />
                <Image
                  alt="app screen"
                  className="relative z-2 aspect-15/8 rounded-2xl border border-border/25 mix-blend-luminosity grayscale dark:hidden"
                  height="1080"
                  src="/app-screen-light.png"
                  width="1920"
                />
                <BorderBeam
                  className="from-transparent via-primary to-transparent"
                  duration={6}
                  size={200}
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
      <LogoCloud />
    </main>
  );
}
