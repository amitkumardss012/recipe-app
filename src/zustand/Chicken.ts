import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  chickken: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchIngredients: () => Promise<void>;
}

const useIngredients = create<ApiStore>((set) => ({
  chickken: null,
  isLoading: false,
  error: null,
  fetchIngredients: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let chickken = data.meals;
      set({ chickken, isLoading: false });
    } catch (error) {
      set({ error: "something went wrong", isLoading: false });
    }
  },
}));

export default useIngredients;
