// store/cartStore.js
import { create } from 'zustand'
import { CartStore, Product } from '../types';

const useCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (product: Product) => set((state:any) => ({
        cart: [...state.cart, product],
    })),

    removeFromCart: (productId: string) => set((state:any) => ({
        cart: state.cart.filter((item: Product) => item.id !== productId),
    })),

    clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
