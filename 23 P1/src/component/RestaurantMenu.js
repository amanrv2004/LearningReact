
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom"
export default function RestaurantMenu(){
    let {id}= useParams();
    const [RestData, setRestData] = useState(null);
    useEffect(()=>{
        async function fetchData() {
           const proxyServer = "https://corsproxy.io/?"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();

           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items) => 'title' in items?.card?.card);
           setRestData(filterData);
        }
        fetchData();
       },[])
    return (
        <>
          <div>{id}</div>
        </>

    )
}