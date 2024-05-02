
import { RecipeCard } from "@/components/RecipeCard";
import { mealTYpe } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const Search = () => {
    const [input, setInput] = useState<string>("");
    const [inputData, setInputData] = useState<mealTYpe[]>([]);
    const [isError, setError] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const debouncedInput = useDebounce(input, 1000);

    const fetchInputMeal = async () => {
        if (!debouncedInput) {
            return;
        }
        try {
            setLoading(true);
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedInput}`
            );
            console.log(res.data);
            if (res.data.meals) {
                setInputData(res.data.meals);
            } else {
                setInputData([]);
            }
            setHasSearched(true); // Set hasSearched to true after search
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (input) {
            fetchInputMeal();
        } else {
            setInputData([]);
            setHasSearched(false)
        }
    }, [debouncedInput]);

    return (
        <div>
            <section
                className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex justify-center items-center md:h-[400px]"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/603267744/photo/tapas-food.jpg?s=612x612&w=0&k=20&c=kHdCs_6B9YizzPkuynSpgJnTf8m37xsAQ6czvu0cXBU=')",
                }}
            >
                <div className="absolute inset-0 bg-gray-900/70" />
                <div className="relative container h-full px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
                    <h1 className="text-3xl text-white sm:text-5xl md:text-6xl font-semibold">
                        Discover Delicious Recipes
                    </h1>
                    <p className="max-w-[600px] text-gray-300 text-lg md:text-xl font-bold p-5 md:p-0">
                        Find the perfect recipe for any occasion. Search our database of
                        thousands of dishes and get inspired to cook something new.
                    </p>
                    <div className="w-full max-w-md">
                        <input
                            className="w-full rounded-md border-none bg-white/90 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-gray-950"
                            placeholder="Search for recipes..."
                            type="search"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </div>
            </section>
            {isError && <p>Something went wrong</p>}
            {isLoading && <h1 className="text-center text-3xl">Loading........</h1>}
            {hasSearched && inputData.length === 0 && !isLoading && (
                <p className="text-center text-xl">No meals found</p>
            )}
            <div className="flex justify-center flex-wrap mt-2 gap-5">
                {inputData.map((meal) => (
                    <RecipeCard key={meal.idMeal} meals={meal} />
                ))}
            </div>
        </div>
    );
};
