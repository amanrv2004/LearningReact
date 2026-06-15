import { useState } from "react";
import { addItems,removeItems } from "./slice2";
import { useDispatch } from "react-redux";

export default function FoodCart({ value }) {
    const [inCart, setInCart] = useState(false);

    const dispatch = useDispatch();

    function handleClick() {
        if (inCart) {
            dispatch(removeItems());
            setInCart(false);
        }
        else {
            dispatch(addItems());
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


// Add : inCart  = false
// Remove : inCart = true