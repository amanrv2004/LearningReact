
export default function GroceryCard({foodData}){
    return(
        <>

           <a href={foodData?.action?.link} className="text-bold flex flex-col ">
             <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}></img>
             <h3>{foodData.action.text}</h3>
           </a>

        </>
    )
}