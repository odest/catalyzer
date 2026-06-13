import { siteConfig } from "@workspace/core/config/site";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  type PlatformCardData,
  platformCards,
} from "../download/platform-mappings";

interface PlatformCardsProps {
  assets: Record<string, string>;
}

function DownloadButton({
  href,
  label,
  ext,
}: {
  href: string | undefined;
  label: string;
  ext: string;
}) {
  if (!href) {
    return null;
  }
  const isExternal = href.startsWith("http");
  return (
    <Button
      asChild={true}
      className="w-full cursor-pointer justify-between"
      variant="outline"
    >
      <Link
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        <span className="text-sm">{label}</span>
        <span className="font-mono text-muted-foreground text-xs">{ext}</span>
      </Link>
    </Button>
  );
}

const colSpanClass = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
} as const;

function PlatformCard({
  platform,
  assets,
}: {
  platform: PlatformCardData;
  assets: Record<string, string>;
}) {
  return (
    <Card
      className={`group overflow-hidden bg-background text-center shadow-foreground/5 ${colSpanClass[platform.colSpan]}`}
    >
      <CardHeader className="pb-3">
        <CardDecorator>{platform.icon}</CardDecorator>
        <h3 className="mt-6 font-medium">{platform.name}</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {platform.downloads.length > 0 ? (
          platform.downloads.map((dl) => (
            <DownloadButton
              ext={dl.ext}
              href={
                dl.assetKey.startsWith("http")
                  ? dl.assetKey
                  : assets[dl.assetKey]
              }
              key={dl.assetKey + dl.label}
              label={dl.label}
            />
          ))
        ) : (
          <p className="py-2 text-muted-foreground text-sm">Coming soon</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function PlatformCards({ assets }: PlatformCardsProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance font-semibold text-4xl lg:text-5xl">
            Available Platforms
          </h2>
          <p className="mt-4 text-muted-foreground">
            Download {siteConfig.name} for your platform.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-6">
          {platformCards.map((platform) => (
            <PlatformCard
              assets={assets}
              key={platform.name}
              platform={platform}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-foreground)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-foreground)20%,transparent)]">
    <div
      aria-hidden={true}
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-background">
      {children}
    </div>
  </div>
);
