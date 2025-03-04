import { create } from "zustand";

interface CartState {
  isOpen: boolean;
  toggleCart: () => void;
  checkoutModal: boolean;
  onCheckoutClose: () => void;
  onCheckout: () => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const useCartState = create<CartState>((set) => ({
  isOpen: false, // Initial state
  checkoutModal: false,
  loading: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })), // Toggler function
  onCheckout: () => set(() => ({ isOpen: false, checkoutModal: true })),
  onCheckoutClose: () => set(() => ({ checkoutModal: false })),
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
}));

export default useCartState;
