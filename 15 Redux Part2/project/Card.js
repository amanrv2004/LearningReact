
const foodItems =[
    {
        id:1,
        food:"Pizza",
        Price:"249"
    },
    {
        id:2,
        food:"Burger",
        Price:"219"
    },
    {
        id:3,
        food:"Cold Coffee",
        Price:"139"
    },
    {
        id:4,
        food:"Cheese Garlic Bread",
        Price:"259"
    },
    {
        id:5,
        food:"Brust Pizza",
        Price:"379"
    },
    {
        id:6,
        food:"Double Cheese Pizza",
        Price:"499"
    },
    {
        id:7,
        food:"Samosa",
        Price:"59"
    },
    {
        id:8,
        food:"Cheese Balls",
        Price:"99"
    },
    {
        id:9,
        food:"Veg Taco",
        Price:"229"
    },
    {
        id:10,
        food:"Mini Cake",
        Price:"149"
    },
];

export default function Card() {
    

    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>
                        <h1>{value.food}</h1>
                        <h1>{value.Price}</h1>
                        <button>Add</button>
                    </div>
                )
            })}
        </div>
    )
}


