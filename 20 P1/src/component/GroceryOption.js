import { GroceryGridCards } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";


export default function GroceryOption() {

    return (
            <div className="mt-20 w-[80%] mx-auto mb-10">
                <h1 className="mb-4">Shop groceries on Instamart</h1>

                <div className="px-4">
                    <div className="grid grid-flow-col auto-cols-max overflow-x-auto gap-3  hide-scrollbar">
                        {GroceryGridCards.map((foodData) => (
                            <GroceryCard key={foodData.id} foodData={foodData} />
                        ))}
                    </div>
                </div>
            </div>
    )
};