import { docs } from "fumadocs-mdx:collections/server";
import { locales, routing } from "@workspace/i18n/routing";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n: {
    languages: [...locales],
    defaultLanguage: routing.defaultLocale,
    fallbackLanguage: routing.defaultLocale,
  },
  icon(iconString) {
    if (iconString && iconString in icons) {
      const Icon = icons[iconString as keyof typeof icons];
      return createElement(Icon);
    }
    return;
  },
});
