import useCatogery from "@/zustand/catogeryMeals";
import { AtoZ } from "../components/AtoZ";
import { CountryButton } from "../components/Country";
import { Hero } from "../components/Hero";
import { useEffect } from "react";
import { Categorey } from "@/components/Categorey";
import useIngredients from "@/zustand/Chicken";
import { RecipeCard } from "@/components/RecipeCard";
import useVegetable from "@/zustand/veg";

export const Home = () => {
  const { meals, fetchData } = useCatogery();
  const { chickken, isLoading, fetchIngredients } = useIngredients();
  const { Vegetable, fetchVegitable } = useVegetable();
  useEffect(() => {
    fetchData();
    fetchIngredients();
    fetchVegitable();
  }, []);
  return (
    <>
      <div className="mt-14">
        <Hero />
      </div>
      <div className="flex justify-center">
        <div className="flex w-[70%] gap-8 mt-5 p-2 overflow-auto">
          <AtoZ />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-[70%] gap-5 mt-5 p-2 overflow-auto">
          <CountryButton />
        </div>
      </div>

      <h1 className="text-center mt-4 mb-5 text-xl font-bold p-5">Fariha If you are seeing this please activate your Twitter or create a new Twitter please please please, you know I'm feeling suffocated</h1>


      <h1 className="ml-5 mb-6 text-2xl font-bold font-sans">
        Catogery of Meals
      </h1>
      <div className="flex gap-3 mt-4 overflow-auto">
        {Array.isArray(meals) &&
          meals.map((categoryMeal) => (
            <Categorey
              categoryMeal={categoryMeal}
              key={categoryMeal.idCategory}
            />
          ))}
      </div>

      <h1 className="ml-5 mb-6 text-2xl font-bold font-sans mt-5">Non Veg</h1>

      <div className="flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <h1 className="text-3xl">Loading....</h1>
        ) : (
          chickken?.map((chickkenNovVeg) => (
            <RecipeCard key={chickkenNovVeg.idMeal} meals={chickkenNovVeg} />
          ))
        )}
      </div>

      <h1 className="ml-5 mb-6 text-2xl font-bold font-sans mt-5">Veg</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {Vegetable?.map((veg) => (
          <RecipeCard meals={veg} key={veg.idMeal} />
        ))}
      </div>
    </>
  );
};
