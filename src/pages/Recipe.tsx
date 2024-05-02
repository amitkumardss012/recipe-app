import useMealDetails from "@/zustand/MealDetailsById";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealWithDetailsType } from "@/type"; // Import the MealWithDetailsType

export const Recipe = () => {
    const { id } = useParams();
    const { mealDetails, isLoading, fetchMealDetails } = useMealDetails();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetchMealDetails(id).catch((error) => setError(error.message));
        }
    }, [id, fetchMealDetails]);
    console.log(mealDetails);
    if (isLoading) {
        return <div className="text-center text-4xl font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    if (!mealDetails) {
        return (
            <div className="text-center text-red-600">Meal details not found.</div>
        );
    }

    // Assert the type of mealDetails to MealWithDetailsType
    const typedMealDetails = mealDetails as MealWithDetailsType;

    return (
        <div className="mt-20 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="rounded-lg overflow-hidden">
                    <img
                        alt="Recipe Image"
                        className="w-full md:h-[300px] h-full object-cover p-2 rounded-2xl"
                        src={typedMealDetails.strMealThumb}
                    />
                </div>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-4 p-6">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Area: {typedMealDetails.strArea}
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Ingredients</h3>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            {/* Render ingredients dynamically */}
                            {Array.from({ length: 20 }).map((_, index) => {
                                const ingredient =
                                    typedMealDetails[
                                    `strIngredient${index + 1}` as keyof MealWithDetailsType
                                    ];
                                const measure =
                                    typedMealDetails[
                                    `strMeasure${index + 1}` as keyof MealWithDetailsType
                                    ];
                                return ingredient && measure ? (
                                    <li key={index}>{`${measure} ${ingredient}`}</li>
                                ) : null;
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Instructions</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {typedMealDetails.strInstructions}
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl mt-5 mb-5">Watch it on youtube</h1>
            {mealDetails.strYoutube && (
                <div className="flex justify-center flex-col">
                    <iframe
                        width="560"
                        height="315"
                        src={mealDetails.strYoutube.replace("watch?v=", "embed/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <a href={mealDetails.strYoutube} target="_blank" className="text-center text-2xl p-5 mb-5 underline text-blue-600">
                        {mealDetails.strYoutube}
                    </a>

                </div>
            )}
            {mealDetails.strSource && (
                <>
                    <div className="text-3xl mt-5 text-center font-bold">Source:</div>
                    <p className="text-center text-2xl p-5 mb-5 underline text-blue-600">
                        <a href={mealDetails.strSource} target="_blank" className="">
                            {mealDetails.strSource}
                        </a>
                    </p>
                </>
            )}
        </div>
    );
};
