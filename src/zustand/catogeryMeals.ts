
import { CategoreyMeal } from "@/type";
import create from "zustand";

interface ApiStore {
  meals: CategoreyMeal[] | null;
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useCatogery = create<ApiStore>((set) => ({
  meals: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Filter out categories containing beef or pork in their names
      const filteredMeals = data.categories.filter((category: CategoreyMeal) => {
        const categoryName = category.strCategory.toLowerCase();
        return !categoryName.includes("beef") && !categoryName.includes("pork");
      });
      set({ meals: filteredMeals, isLoading: false });
    } catch (error) {
      set({ error: "Something went wrong", isLoading: false });
    }
  },
}));

export default useCatogery;
