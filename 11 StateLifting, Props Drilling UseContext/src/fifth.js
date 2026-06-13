
import {useContext} from 'react';
import CountContext from "./context/Count";

export default function Fifth(){
        const data = useContext(CountContext);
        // const {count , setCount} = useContext(CountContext);

    return(
        <>Mai Hu DON {data}</>
        // <>Mai Hu DON {count}</>
    )
}