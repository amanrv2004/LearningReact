import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Increment,Decrement,Reset } from "./slicer1";

export default function Counting(){
    
    const count = useSelector((state)=>state.slice1.count);  // gives the global state
    const dispatch = useDispatch();

    console.log(Increment());
    console.log(Decrement());
    console.log(Reset());

    return(
        <>
            <h1>Count is {count}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}