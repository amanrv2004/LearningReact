

export default function DineCard({ RestData }) {

    return (
        <div className="max-w-sm">
            <div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
                    RestData?.info?.mediaFiles[0]?.url}></img>
                <p>{RestData?.info?.name}</p>
                <p>{RestData?.info?.rating?.value}</p>
            </div>

        </div>
    )
}