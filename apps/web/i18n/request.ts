import { getRequestConfig } from "@workspace/i18n/server";
import { hasLocale, messages } from "@workspace/i18n";
import { routing } from "@workspace/i18n/routing";

export default getRequestConfig(async function createRequestConfig({
  requestLocale,
}) {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
