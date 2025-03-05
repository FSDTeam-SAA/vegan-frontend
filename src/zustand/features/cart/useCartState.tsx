import { MerchantProduct } from "@/types/merchant";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartProduct = MerchantProduct & {
  endTime: Date;
};

type StoreState = {
  data: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: string) => void;
  resetCartState: () => void; // Adding the resetCartState method
};

export const useCartDataState = create<StoreState>()(
  persist(
    (set) => ({
      data: [],
      addProductToCart: (product: CartProduct) =>
        set((state) => {
          const exists = state.data.some((item) => item._id === product._id);
          return {
            data: exists
              ? state.data.filter((item) => item._id !== product._id) // Remove if exists
              : [...state.data, product], // Add if not exists
          };
        }),
      removeProductFromCart: (productId: string) =>
        set((state) => ({
          data: state.data.filter((item) => item._id !== productId),
        })),
      resetCartState: () => set({ data: [] }), // Reset the cart data
    }),
    {
      name: "cart-data", // The key for localStorage
      // When rehydrating, convert stored endTime strings back to Date objects.
      onRehydrateStorage: (state) => {
        if (state) {
          state.data = state.data.map((item) => ({
            ...item,
            endTime: new Date(item.endTime),
          }));
        }
      },
    },
  ),
);
