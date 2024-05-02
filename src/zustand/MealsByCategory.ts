import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  catogeryMeals: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchCatogeryMeals: (category: string) => Promise<void>;
}

const useCatogeryMeals = create<ApiStore>((set) => ({
  catogeryMeals: null,
  isLoading: false,
  error: null,
  fetchCatogeryMeals: async (category) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let filteredMeals = data.meals.filter((meal: mealTYpe) => {
        return !meal.strMeal.toLowerCase().includes("beef") &&
          !meal.strMeal.toLowerCase().includes("pork");
      });
      set({ catogeryMeals: filteredMeals, isLoading: false });
    } catch (error) {
      set({ error: "Something went wrong", isLoading: false });
    }
  },
}));

export default useCatogeryMeals;
