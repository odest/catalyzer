import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { getStorageItem } from "@workspace/core/lib/storage-utils"
import type { Themes } from "@workspace/core/config/themes"

interface ThemeState {
  selectedTheme: Themes
  setSelectedTheme: (theme: Themes) => void
  setSortOption: (sortOption: string) => void
  sortOption: string
}

export const applyTheme = (theme: Themes) => {
  const root = document.documentElement
  if (theme === "default" || !theme) {
    root.removeAttribute("data-theme")
  } else {
    root.setAttribute("data-theme", theme)
  }
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      selectedTheme: getStorageItem<Themes>("theme-storage", "default"),
      sortOption: "default",

      setSelectedTheme: (theme: Themes) => {
        set({ selectedTheme: theme })
        applyTheme(theme)
      },

      setSortOption: (sortOption: string) => set({ sortOption }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
