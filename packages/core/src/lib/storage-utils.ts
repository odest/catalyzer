export function getStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;

    const parsed = JSON.parse(item);
    return parsed?.state ?? fallback;
  } catch (error) {
    console.error(`[Storage] Error reading ${key}:`, error);
    return fallback;
  }
}
