import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  countryMeals: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (country: string) => Promise<void>;
}

const useCountryMeals = create<ApiStore>((set) => ({
  countryMeals: null,
  isLoading: false,
  error: null,
  fetchData: async (country) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let filteredMeals = data.meals.filter((meal: mealTYpe) => {
        return !meal.strMeal.toLowerCase().includes("beef") &&
          !meal.strMeal.toLowerCase().includes("pork");
      });
      set({ countryMeals: filteredMeals, isLoading: false });
    } catch (error) {
      set({ error: "Something went wrong", isLoading: false });
    }
  },
}));

export default useCountryMeals;
