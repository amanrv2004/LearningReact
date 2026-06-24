

export default function DineCard({ RestData }) {

    return (
        <div className="max-w-sm flex-none">
            <a href={RestData.cta.link}>
                <div className="relative mb-10">
                <img className="w-80 h-50 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
                    RestData?.info?.mediaFiles[0]?.url}></img>
                <div className=" rounded-3xl absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0">
                    <p className="absolute bottom-2 left-2 text-xl bold text-white">{RestData?.info?.name}</p>
                    <p className="absolute bottom-2 right-2 text-xl bold text-white">{RestData?.info?.rating?.value}</p>
                </div>
            </div>
            </a>
        </div>
    )
}