import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
    {
        id: 1,
        food: "Pizza",
        Price: "249"
    },
    {
        id: 2,
        food: "Burger",
        Price: "219"
    },
    {
        id: 3,
        food: "Coffee",
        Price: "139"
    },
    {
        id: 4,
        food: "Momo",
        Price: "259"
    },
    {
        id: 5,
        food: "Pasta",
        Price: "379"
    },
    {
        id: 6,
        food: "kebab",
        Price: "499"
    },
    {
        id: 7,
        food: "Samosa",
        Price: "59"
    },
    {
        id: 8,
        food: "Panner",
        Price: "99"
    },
    {
        id: 9,
        food: "Taco",
        Price: "229"
    },
    {
        id: 10,
        food: "Cake",
        Price: "399"
    },
];

export default function Card() {



    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "50px" }}>
            {foodItems.map((value) => {
                return (

                    <div key={value.id}>
                        <FoodCart value={value} />
                    </div>
                )
            })}
        </div>
    )
}


