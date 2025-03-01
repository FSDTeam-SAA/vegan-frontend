import { create } from "zustand";

export type VendorStatus = "pending" | "approved" | "rejected" | "all";

export type VendorProfileType =
  | "professional"
  | "merchant"
  | "organization"
  | "all";

type StoreState = {
  value: string;
  setValue: (value: string) => void;

  status: VendorStatus;
  setStatus: (status: VendorStatus) => void;

  profile: VendorProfileType;
  setProfile: (profile: VendorProfileType) => void;

  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

export const useVendorManagementState = create<StoreState>((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),

  status: "pending",
  setStatus: (status: VendorStatus) => set({ status }),

  profile: "all",
  setProfile: (profile: VendorProfileType) => set({ profile }),

  sortBy: "asc",
  setSortBy: (sortBy: string) => set({ sortBy }),
}));
