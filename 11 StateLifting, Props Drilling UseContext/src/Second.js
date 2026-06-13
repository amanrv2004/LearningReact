import Third  from "./Third";
import {useContext} from 'react';
import CountContext from "./context/Count";

export default function Second(){
    const {count,setCount} = useContext(CountContext)
    return (
        <>
        <h1> Kaise ho app log {count} </h1>
        <Third/>
        </>
        
    )
}