import GlobalContext from "./context/Global";
import {useContext} from 'react'
export default function Second({count,setCount}){
    
   const data = useContext(GlobalContext);
    return (
        <>
 
        <h1>Ham Thik hai, {data} </h1>

        </>
        
    )
}