
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
  let { id } = useParams();
  const [RestData, setRestData] = useState([]);
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://corsproxy.io/?"
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData?.filter((items) => 'title' in items?.card?.card);
      setRestData(filterData);
    }
    fetchData();
  }, []);


  // if (selected === 'veg') {
  //   return (
  //     <>
  //       <h1>Veg Selected</h1>
  //     </>
  //   )
  // }

  // if (selected === 'nonveg') {
  //   return (
  //     <>
  //       <h1>Non - Veg Selected</h1>
  //     </>
  //   )
  // }



  return (
    <>
      <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-2 border rounded-2xl  ${selected === "veg" ? "bg-green-600" : "bg-gray-300"}`} onClick={() => setSelected(selected === 'veg' ? null : 'veg')}>Veg</button>
        <button className={`text-2xl py-2 px-8 mr-2 border rounded-2xl  ${selected === "nonveg" ? "bg-red-600" : "bg-gray-300"}`} onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}>Non Veg</button>
      </div>

      <div className="w-[80%] mx-auto mt-20">
        {
          RestData?.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
        }
      </div>
    </>

  )
}