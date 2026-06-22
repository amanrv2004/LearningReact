import {GroceryGridCards} from "../utils/Grocery";
import GroceryCard from "./GroceryCard";


export default function GroceryOption(){

    return(
        <>
        <div className="mt-20 w-[80%] container mx-auto mb-10">
            <h1>Shop groceries on Instamart</h1>
            <div className="w-[80%] mx-auto px-4 grid grid-flow-col auto-cols-max overflow-x-auto gap-5">
                {
                    GroceryGridCards.map((foodData)=><GroceryCard  key={foodData.id} foodData = {foodData}/>)
                }
            </div>
        </div>
        </>
    )
};