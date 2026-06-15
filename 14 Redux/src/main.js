import React from "react";
import ReactDOM from 'react-dom/client';
import Counting from "./Counting";

function App(){
    
    return (
        <>
           <Counting></Counting>
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App />)
