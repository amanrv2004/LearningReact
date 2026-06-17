import React from "react";
import ReactDOM from 'react-dom/client';
import Add from "./Add";
const arr = [1,2,3,4]

function App(){
    
    return (
        <>
           {
            arr.map((value)=><Add key={value} />)
           }
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
