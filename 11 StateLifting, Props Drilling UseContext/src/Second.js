import Third  from "./Third";
import {useContext} from 'react';
import GlobalContext from "./context/Global";

export default function Second({count,setCount}){
    const data = useContext(GlobalContext)
    return (
        <>
        <h1>{data} : Kaise ho app log </h1>
        <Third count={count} setCount={setCount}/>
        </>
        
    )
}