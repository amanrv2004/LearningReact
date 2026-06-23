
export default function RestCard({restInfo}){
   
    
    return (
       <div>
         <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
         <div className="w-[95%] mx-auto mt-4">
            <div className="font-bold text-xl ">{restInfo?.info?.name}</div>
         </div>
         
       </div>
    )
}