import { create } from "zustand";

interface HotkeysDialogState {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
}

export const useHotkeysDialogStore = create<HotkeysDialogState>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
