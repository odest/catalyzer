import { create } from "zustand";

interface CommandPaletteStore {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
}

export const useCommandPaletteStore = create<CommandPaletteStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
