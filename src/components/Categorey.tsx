import { CategoreyMeal } from "@/type";
import { Link } from "react-router-dom";

export const Categorey = ({
    categoryMeal,
}: {
    categoryMeal: CategoreyMeal;
}) => {
    return (
        <>
            <Link to={`/category/${categoryMeal.strCategory}`}>
                <div className="cursor-pointer w-full flex flex-col justify-center items-center gap-2">
                    <div className="w-40 h-20">
                        <img
                            src={categoryMeal.strCategoryThumb}
                            alt=""
                            width={100}
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                    <h1 className="font-bold">{categoryMeal.strCategory}</h1>
                </div>
            </Link>
        </>
    );
};
