
import {dineoutRestaurants} from "../utils/DineData"

export default function DineOption() {
  return (
        <div className="mt-20 w-[80%] mx-auto">
            <h1 className="text-xl font-bold">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto mt-5">
                {
                    dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info.id}  RestData = {RestData}/>)
                }
            </div>
        </div>
  );
}