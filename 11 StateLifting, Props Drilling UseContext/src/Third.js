import CountContext from "./context/Count";
import {useContext} from 'react'
export default function Second({count,setCount}){
    
   const data = useContext(CountContext);
    return (
        <>
 
        <h1>Ham Thik hai, {data} </h1>

        </>
        
    )
}