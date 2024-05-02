import { useEffect } from "react";
import useRandomMeal from "../zustand/randomMeal";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
    const { meals, error, fetchData } = useRandomMeal()
    useEffect(() => { fetchData() }, [])

    return (
        <>
            {error && <p>something went wrong</p>}
            <section
                className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
                style={{
                    backgroundImage: `url(${meals?.strMealThumb})`,
                }}
            >
                {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
                <div className="ml-5 mt-10 flex justify-center items-center w-full h-full flex-col">
                    <img src={meals?.strMealThumb} className="h-[300px] w-80 rounded-2xl" alt="" />
                    <div className="flex gap-2 flex-col justify-center">
                        <h1 className="text-yellow-300 font-extrabold">{meals?.strMeal}</h1>
                        <Button variant={"ghost"} className="text-blue-600">{meals?.strArea}</Button>
                        <Link to={`/recipe/${meals?.idMeal}`} className="flex justify-center">
                            <Button>View Recipe</Button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}


