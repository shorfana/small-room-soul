// useStore.ts
import { create } from "zustand";

interface BandState {
  bandName: string;
  bandImage: string;
  setBand: (name: string, image: string) => void;
}

export const useStore = create<BandState>((set) => ({
  bandName: "",
  bandImage: "",
  setBand: (name: string, image: string) =>
    set({ bandName: name, bandImage: image }),
}));
