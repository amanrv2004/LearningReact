

export default function RestInfo({restData}){
    return (
        <>
            <div className="flex w-full justify-between">
                <div className="w-[70%]">
                        <p>{restData?.name}</p>
                        <p>{"$"+restData?.defaultPrice/100}</p>
                        <span>{restData?.ratings?.aggregatedRating?.rating}</span>
                        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                        <p>{restData?.description}</p>
                        
                </div>
                <div className="w-[20%]">

                </div>

            </div>
        </>
    )
}