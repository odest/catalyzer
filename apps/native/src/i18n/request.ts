// This file is not used for Tauri static export
// Messages are loaded client-side in layout.tsx via NextIntlClientProvider
// with locale and messages props directly passed from the layout

// Keeping this file for compatibility, but it won't be called
import { getRequestConfig } from "@workspace/i18n/server";
import { routing } from "@workspace/i18n/routing";

export default getRequestConfig(async () => ({
  locale: routing.defaultLocale,
  messages: {},
}));
