

export default function FoodCard({foodData}){
    return(
        <>
           <a href={""}>
             <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}></img>
           </a>
        </>
    )
}