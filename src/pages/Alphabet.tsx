// import { AlphabetHero } from "@/components/AlphabetHero";
// import { RecipeCard } from "@/components/RecipeCard";
// import useAlphabetMeals from "@/zustand/alphabetMeals";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// };

import { AlphabetHero } from "@/components/AlphabetHero";
import { RecipeCard } from "@/components/RecipeCard";
import useAlphabetMeals from "@/zustand/alphabetMeals";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Alphabet = () => {
    const params = useParams();
    const { alphabetMeals, isLoading, fetchData } = useAlphabetMeals();
    useEffect(() => {
        fetchData(params.alphabet || "");
    }, [params.alphabet]);
    console.log("alphabet meals", alphabetMeals);
    return (
        <>
            <div className="mt-16">

                <AlphabetHero />
            </div>
            <h1 className="text-center text-2xl mt-5 mb-5 p-2">
                Search result for Alphabet : {params.alphabet}
            </h1>

            <div className="flex flex-wrap gap-4 justify-center">
                {isLoading ? (
                    <p className="text-3xl">Loading......</p>
                ) : (
                    alphabetMeals && alphabetMeals.length > 0 ? (
                        alphabetMeals.map((alphabet) => <RecipeCard key={alphabet.idMeal} meals={alphabet} />)
                    ) : (
                        <p className="text-6xl text-center">
                            No Meals Found For {params.alphabet}
                        </p>
                    )
                )}
            </div>
        </>
    );
};
