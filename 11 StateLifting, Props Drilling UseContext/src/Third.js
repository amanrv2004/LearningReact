import CountContext from "./context/Count";
import {useContext} from 'react'
export default function Second(){
    
   const {count,setCount} = useContext(CountContext);
    return (
        <>
 
        <h1>Ham Thik hai {count} </h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        </>
        
    )
}