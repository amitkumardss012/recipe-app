import { CountryButton } from "@/components/Country";
import { RecipeCard } from "@/components/RecipeCard";
import useCountryMeals from "@/zustand/MealsByCountry";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Country = () => {
    const params = useParams();
    const { countryMeals, fetchData, isLoading } = useCountryMeals();
    useEffect(() => {
        fetchData(params.country || "");
    }, [params.country]);

    console.log("emalsl", countryMeals);
    return (
        <div className="mt-16">
            <div className="flex justify-center">
                <div className="flex w-[80%] gap-5 mt-5 p-2 overflow-auto">
                    <CountryButton />
                </div>
            </div>
            <h1 className="text-center text-2xl mt-5 mb-5 p-2">
                Search Results for: {params.country}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {isLoading ? (
                    <h1 className="text-3xl">Loading.....</h1>
                ) : (
                    countryMeals?.map((country) => <RecipeCard meals={country} />)
                )}
                {countryMeals?.length == 0 && (
                    <p className="text-center text-6xl">
                        No meals found for {params.country}
                    </p>
                )}
            </div>
        </div>
    );
};
