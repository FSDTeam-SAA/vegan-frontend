import { create } from "zustand";

type StoreState = {
  value: string;
  setValue: (value: string) => void;

  category: string;
  setCategory: (category: string) => void;

  location: string;
  setLocation: (location: string) => void;

  sortBy: string;
  setSortBy: (sortBy: string) => void;

  price: number[];
  setPrice: (price: number[]) => void;
};

export const useOrganizationState = create<StoreState>((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),

  category: "expertise",
  setCategory: (category: string) => set({ category }),

  location: "washington",
  setLocation: (location: string) => set({ location }),

  sortBy: "asc",
  setSortBy: (sortBy: string) => set({ sortBy }),

  price: [0, 50],
  setPrice: (price: number[]) => set({ price }),
}));
