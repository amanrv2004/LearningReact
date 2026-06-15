import { useState } from "react";


export default function Counting(){
    const [count,setCount] = useState(0);

    return(
        <>
            <h1>Count is {count}</h1>
            <button >Increment</button>
            <button >Decrement</button>
            <button >Reset</button>
        
        </>
    )
}