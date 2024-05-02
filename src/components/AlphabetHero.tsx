import { AtoZ } from "./AtoZ";

export const AlphabetHero = () => {
    return (
        <>
            <section
                className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex justify-center items-center lg:h-[30vh]"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/603267744/photo/tapas-food.jpg?s=612x612&w=0&k=20&c=kHdCs_6B9YizzPkuynSpgJnTf8m37xsAQ6czvu0cXBU=')",
                }}
            >
                <div className="absolute inset-0 bg-gray-900/70" />
                <div className="relative container h-full px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
                    <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl">
                        Discover Delicious Recipes Based on Alphabet
                    </h1>
                    <div className="space-x-3 space-y-3">
                        <AtoZ />
                    </div>
                </div>
            </section>
        </>
    );
};
