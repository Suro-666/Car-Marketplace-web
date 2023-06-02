import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      userData: null,
      setUser: (user) => set({ userData: user }),
      signOutUser: () => set({ userData: null }),
    }),
    {
      name: "userData",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
