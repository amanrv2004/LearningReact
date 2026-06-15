import { useState } from "react";


export default function FoodCart({ value }) {
    const [inCart, setInCart] = useState(false);
    function handleClick() {
        if (inCart) {
            setInCart(false);
        }
        else {
            setInCart(true);
        }
    }
    return (
        <>
            <h1>{value.food}</h1>
            <h1>{value.Price}</h1>
            <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
        </>
    )
}