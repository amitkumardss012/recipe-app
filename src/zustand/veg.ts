import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  Vegetable: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchVegitable: () => Promise<void>;
}

const useVegetable = create<ApiStore>((set) => ({
  Vegetable: null,
  isLoading: false,
  error: null,
  fetchVegitable: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=Vegetable Stock"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let Vegetable = data.meals;
      set({ Vegetable, isLoading: false });
    } catch (error) {
      set({ error: "something went wrong", isLoading: false });
    }
  },
}));

export default useVegetable;
