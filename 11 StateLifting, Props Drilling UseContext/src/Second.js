import Third  from "./Third";
import {useContext} from 'react';
import CountContext from "./context/Count";

export default function Second({count,setCount}){
    const data = useContext(CountContext)
    return (
        <>
        <h1>{data} : Kaise ho app log </h1>
        <Third count={count} setCount={setCount}/>
        </>
        
    )
}