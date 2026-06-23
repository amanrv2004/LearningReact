
export default function GroceryCard({foodData}){
    return(
        <>

           <a href={foodData?.action?.link} className="flex flex-col flex-shrink-0 ">
             <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}></img>
             <h3 className="font-bold text-center">{foodData.action.text}</h3>
           </a>

        </>
    )
}