import { mealTYpe } from "@/type";
import create from "zustand";

interface ApiStore {
  countryList: mealTYpe[] | null;
  isLoading: boolean;
  error: string | null;
  fetchCountryList: () => Promise<void>;
}

const useCountryList = create<ApiStore>((set) => ({
  countryList: null,
  isLoading: false,
  error: null,
  fetchCountryList: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
        let countryList = data.meals;
      set({ countryList, isLoading: false });
    } catch (error) {
      set({ error: "something went wrong", isLoading: false});
    }
  },
}));

export default useCountryList;
