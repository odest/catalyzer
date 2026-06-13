import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import type { ReactNode } from "react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@workspace/ui/components/landing/logo";
import { siteConfig } from "@workspace/core/config/site";

function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Logo className="size-5" />
          <span className="font-semibold">{siteConfig.name}</span>
        </div>
      ),
    },
    githubUrl: siteConfig.links.github,
  };
}

export default async function DocsLayoutWrapper(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  return (
    <RootProvider
      i18n={{
        locale,
        locales: [],
      }}
    >
      <DocsLayout {...baseOptions()} tree={source.getPageTree(locale)}>
        {props.children}
      </DocsLayout>
    </RootProvider>
  );
}
