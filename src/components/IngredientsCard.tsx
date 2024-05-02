

export const IngredientsCard = () => {
    return (
        <>
            <div className="w-full max-w-[280px] rounded-lg  shadow-lg">
                <div className="relative">
                    {/* <img alt="Food Image" className="w-full aspect-square object-cover" src="https://www.themealdb.com/images/category/chicken.png" /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-4 space-y-2">
                    <h3 className="text-2xl font-bold">Delicious Pasta Dish</h3>
                    <p className="">Penne Pasta with Tomato Sauce</p>
                    <button className="w-full bg-[#0070f3] text-white hover:bg-[#0070f3]/90 rounded-md py-2 px-4 font-medium transition-colors">
                        View Meals
                    </button>
                </div>
            </div>
        </>
    )
}
