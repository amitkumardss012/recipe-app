import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  alphabetMeals: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (alphabet: string) => Promise<void>;
}

const useAlphabetMeals = create<ApiStore>((set) => ({
  alphabetMeals: null,
  isLoading: false,
  error: null,
  fetchData: async (alphabet) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
        let alphabetMeals = data.meals;
      set({ alphabetMeals, isLoading: false });
    } catch (error) {
      set({ error: "something went wrong", isLoading: false});
    }
  },
}));

export default useAlphabetMeals;
