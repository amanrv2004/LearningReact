import Third  from "./Third";
import GlobalContext from "./context/Global";
import {useContext} from 'react'
export default function Second({count,setCount}){
    const data = useContext(GlobalContext)
    return (
        <>
        <h1>{data} : Kaise ho app log </h1>
        <Third count={count} setCount={setCount}/>
        </>
        
    )
}