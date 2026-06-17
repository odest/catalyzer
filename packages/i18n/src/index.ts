import type { routing } from "@workspace/i18n/routing";

export type Locale = (typeof routing.locales)[number];

// biome-ignore lint/performance/noBarrelFile: Wrapper package re-exports
export { localeConfig } from "@workspace/i18n/routing";
export * from "next-intl";

import deMessages from "./messages/de.json" with { type: "json" };
// Export messages statically
import enMessages from "./messages/en.json" with { type: "json" };
import esMessages from "./messages/es.json" with { type: "json" };
import frMessages from "./messages/fr.json" with { type: "json" };
import itMessages from "./messages/it.json" with { type: "json" };
import jaMessages from "./messages/ja.json" with { type: "json" };
import ptMessages from "./messages/pt.json" with { type: "json" };
import ruMessages from "./messages/ru.json" with { type: "json" };
import trMessages from "./messages/tr.json" with { type: "json" };
import zhMessages from "./messages/zh.json" with { type: "json" };

export const messages = {
  en: enMessages,
  tr: trMessages,
  es: esMessages,
  fr: frMessages,
  de: deMessages,
  pt: ptMessages,
  it: itMessages,
  ru: ruMessages,
  ja: jaMessages,
  zh: zhMessages,
} as const;
