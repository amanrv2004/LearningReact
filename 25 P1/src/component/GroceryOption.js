import { GroceryGridCards } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";


export default function GroceryOption() {
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <h1 className="text-xl font-bold">Shop groceries on Instamart</h1>
      <div className="flex flex-nowrap overflow-x-auto gap-3 hide-scrollbar px-4 mb-10 mt-5">
        {GroceryGridCards.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}