import { useState } from "react";
import { useDispatch } from "react-redux"
import { CustomIncreaser,Increment,Decrement} from "./slicer1";

export default function CustomCounter() {

    const [number, setNumber] = useState("")
    
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(CustomIncreaser(Number(number)));
    }
    return (
        <>
            
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}