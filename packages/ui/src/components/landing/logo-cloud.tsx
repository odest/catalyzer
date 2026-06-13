import { InfiniteSlider } from "@workspace/ui/components/landing/infinite-slider";
import { ProgressiveBlur } from "@workspace/ui/components/landing/progressive-blur";
import { Biome } from "@workspace/ui/components/svgs/biome";
import { Motion } from "@workspace/ui/components/svgs/motion";
import { Nextjs } from "@workspace/ui/components/svgs/nextjs";
import { RadixUi } from "@workspace/ui/components/svgs/radix-ui";
import { React } from "@workspace/ui/components/svgs/react";
import { Rust } from "@workspace/ui/components/svgs/rust";
import { Tailwindcss } from "@workspace/ui/components/svgs/tailwindcss";
import { Tauri } from "@workspace/ui/components/svgs/tauri";
import { Turborepo } from "@workspace/ui/components/svgs/turborepo";

export const LogoCloud = () => (
  <section className="bg-background pt-16 pb-16 md:pb-32">
    <div className="group relative m-auto max-w-6xl px-6">
      <div className="flex flex-col items-center md:flex-row">
        <div className="inline md:max-w-44 md:border-r md:pr-6">
          <p className="text-end text-sm">Powered by the best tools</p>
        </div>
        <div className="relative py-6 **:fill-foreground md:w-[calc(100%-11rem)]">
          <InfiniteSlider gap={112} speed={40} speedOnHover={20}>
            <Nextjs height={24} width={80} />
            <Tauri height={24} width={80} />
            <Rust height={24} width={80} />
            <Tailwindcss height={24} width={80} />
            <React height={24} width={80} />
            <Turborepo height={24} width={80} />
            <RadixUi height={24} width={80} />
            <Motion height={24} width={80} />
            <Biome height={24} width={80} />
          </InfiniteSlider>

          <div
            aria-hidden={true}
            className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
          />
          <div
            aria-hidden={true}
            className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
          />
          <ProgressiveBlur
            blurIntensity={1}
            className="pointer-events-none absolute top-0 left-0 h-full w-20"
            direction="left"
          />
          <ProgressiveBlur
            blurIntensity={1}
            className="pointer-events-none absolute top-0 right-0 h-full w-20"
            direction="right"
          />
        </div>
      </div>
    </div>
  </section>
);
