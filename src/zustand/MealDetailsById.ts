import { MealWithDetailsType } from "@/type";
import create from "zustand";

interface ApiStore {
  mealDetails: MealWithDetailsType | null;
  isLoading: boolean;
  error: string | null;
  fetchMealDetails: (id: string) => Promise<void>;
}

const useMealDetails = create<ApiStore>((set) => ({
  mealDetails: null,
  isLoading: false,
  error: null,
  fetchMealDetails: async (id) => {
  set({ isLoading: true, error: null });
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // Assuming mealDetails is an array within the response data
    const mealDetails = data.meals[0];
    set({ mealDetails, isLoading: false });
  } catch (error) {
    set({ error: "Something went wrong", isLoading: false });
  }
},
}));

export default useMealDetails;
