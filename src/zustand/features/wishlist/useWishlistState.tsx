import { MerchantProfile } from "@/types/merchant";
import { OrganizationProfile } from "@/types/organization";
import { ProfessionalProfile } from "@/types/professional";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreState = {
  professionals: ProfessionalProfile[];
  addProfessional: (data: ProfessionalProfile) => void;
  organizations: OrganizationProfile[];
  addOrganization: (data: OrganizationProfile) => void;
  merchants: MerchantProfile[];
  addMerchant: (data: MerchantProfile) => void;
};

export const useWishlistState = create<StoreState>()(
  persist(
    (set) => ({
      professionals: [],
      organizations: [],
      merchants: [],
      addProfessional: (profile: ProfessionalProfile) =>
        set((state) => {
          const exists = state.professionals.some(
            (item) => item._id === profile._id,
          );
          return {
            professionals: exists
              ? state.professionals.filter((item) => item._id !== profile._id) // Remove if exists
              : [...state.professionals, profile], // Add if not exists
          };
        }),

      addOrganization: (profile: OrganizationProfile) =>
        set((state) => {
          const exists = state.organizations.some(
            (item) => item._id === profile._id,
          );
          return {
            organizations: exists
              ? state.organizations.filter((item) => item._id !== profile._id) // Remove if exists
              : [...state.organizations, profile], // Add if not exists
          };
        }),
      addMerchant: (profile: MerchantProfile) =>
        set((state) => {
          const exists = state.merchants.some(
            (item) => item._id === profile._id,
          );
          return {
            merchants: exists
              ? state.merchants.filter((item) => item._id !== profile._id) // Remove if exists
              : [...state.merchants, profile], // Add if not exists
          };
        }),
    }),
    {
      name: "wishlist", // The key for localStorage
      // Rehydrate storage properly
      onRehydrateStorage: (state) => {
        if (state) {
          state.professionals = state.professionals.map((item) => ({
            ...item,
          }));
          state.organizations = state.organizations.map((item) => ({
            ...item,
          }));
        }
      },
    },
  ),
);
