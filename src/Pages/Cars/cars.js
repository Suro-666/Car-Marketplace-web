import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCarsStore = create(
  immer((set) => ({
    carsData: null,
    setCars: (data) =>
      set((state) => {
        state.carsData = data;
      }),
  }))
);
