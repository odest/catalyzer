import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, {
  localeMap: {
    // Japanese and Chinese are not supported by Orama's stemmer,
    // so we fall back to English stemming for search indexing.
    ja: "english",
    zh: "english",
  },
});
