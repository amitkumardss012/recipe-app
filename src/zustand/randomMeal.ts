import create from "zustand";

interface ApiData {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}

interface ApiStore {
  meals: ApiData | null;
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useRandomMeal = create<ApiStore>((set) => ({
  meals: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const meals = data.meals[0];
      set({ meals, isLoading: false });
    } catch (error) {
      set({ error: "something went wrong", isLoading: false });
    }
  },
}));

export default useRandomMeal;
