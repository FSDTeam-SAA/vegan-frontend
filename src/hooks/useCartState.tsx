import { create } from "zustand";

interface CartState {
  isOpen: boolean;
  toggleCart: () => void;
}

const useCartState = create<CartState>((set) => ({
  isOpen: false, // Initial state
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })), // Toggler function
}));

export default useCartState;
