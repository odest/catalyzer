import { getStorageItem } from "@workspace/core/lib/storage-utils";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SidebarVariant = "sidebar" | "floating" | "inset";

interface SidebarState {
  setVariant: (variant: SidebarVariant) => void;
  variant: SidebarVariant;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      variant: getStorageItem<SidebarVariant>("sidebar-storage", "inset"),

      setVariant: (variant: SidebarVariant) => {
        set({ variant });
      },
    }),
    {
      name: "sidebar-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
