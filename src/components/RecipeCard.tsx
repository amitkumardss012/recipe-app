import { mealTYpe } from "@/type";
import { Link } from "react-router-dom";

export const RecipeCard = ({ meals }: { meals: mealTYpe }) => {
    return (
        <>
            <div className="w-full max-w-[280px] rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                    <img alt="Food Image" className="w-full aspect-square object-cover" src={`${meals.strMealThumb}/preview`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-4 space-y-2">
                    {/* Truncate the title with ellipsis if it exceeds the width */}
                    <h3 className="text-2xl font-bold truncate">{meals.strMeal}</h3>
                    <Link to={`/recipe/${meals.idMeal}`}>
                        <button className="w-full bg-[#0070f3] text-white hover:bg-[#0070f3]/90 rounded-md py-2 px-4 font-medium transition-colors mt-3">
                            View Recipe
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
