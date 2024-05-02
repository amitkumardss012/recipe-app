import { Categorey } from "@/components/Categorey";
import { RecipeCard } from "@/components/RecipeCard";
import useCatogeryMeals from "@/zustand/MealsByCategory";
import useCatogery from "@/zustand/catogeryMeals";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CatogeryMeals = () => {
    const params = useParams();
    const { meals, fetchData } = useCatogery();
    const { catogeryMeals, isLoading, fetchCatogeryMeals } = useCatogeryMeals();

    useEffect(() => {
        fetchData();
        fetchCatogeryMeals(params.category || "");
    }, [params.category]);
    console.log("catogery", catogeryMeals);
    return (
        <div className="mt-20">
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

            <h1 className="text-center mt-6 mb-6 text-2xl font-bold font-sans">
                Search Results for : {params.category}
            </h1>
            <div className="flex justify-center flex-wrap mt-2 gap-5">
                {isLoading ? (
                    <h1 className="text-center text-3xl">Loading......</h1>
                ) : (
                    catogeryMeals?.map((catogery) => <RecipeCard meals={catogery} />)
                )}
            </div>
        </div>
    );
};
