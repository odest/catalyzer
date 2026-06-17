import { create } from "zustand";

interface ProfileDrawerStore {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  setOpen: (open: boolean) => void;
}

export const useProfileDrawerStore = create<ProfileDrawerStore>((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
