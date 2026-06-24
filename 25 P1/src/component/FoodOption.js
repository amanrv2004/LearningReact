import { imageGridCards } from "../utils/FoodData"
import FoodCard from "./FoodCard"
export default function FoodOption() {

    return (
        <>
            <div className="mt-20 w-[80%] mx-auto">
                <h1 className="text-xl font-bold">Order our best food options</h1>
                <div className="w-[80%] mx-auto px-4 grid grid-flow-col auto-cols-max overflow-x-auto gap-3  hide-scrollbar">
                    {
                        imageGridCards.map((foodData) => <FoodCard key={foodData.id} foodData={foodData} />)
                    }
                </div>
            </div>
        </>
    )
};