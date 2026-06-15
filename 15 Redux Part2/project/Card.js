import { useState } from "react";

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
        food:"Coffee",
        Price:"139"
    },
    {
        id:4,
        food:"Momo",
        Price:"259"
    },
    {
        id:5,
        food:"Pasta",
        Price:"379"
    },
    {
        id:6,
        food:"kebab",
        Price:"499"
    },
    {
        id:7,
        food:"Samosa",
        Price:"59"
    },
    {
        id:8,
        food:"Panner",
        Price:"99"
    },
    {
        id:9,
        food:"Taco",
        Price:"229"
    },
    {
        id:10,
        food:"Cake",
        Price:"399"
    },
];

export default function Card() {
     
    const [isCart,setInCart] = useState(false)

    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id} style={{border:"2px solid black" ,margin:"10px",padding:"10px"}}>
                        <h1>{value.food}</h1>
                        <h1>{value.Price}</h1>
                        <button>Add</button>
                    </div>
                )
            })}
        </div>
    )
}


