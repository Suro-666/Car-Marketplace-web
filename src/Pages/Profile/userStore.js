import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create(
  immer((set) => ({
    currentUser: null,
    setCurrentUser: (data) =>
      set((state) => {
        state.currentUser = data;
      }),
  }))
);
