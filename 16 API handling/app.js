const { useEffect } = require("react");
import React from "react";
import ReactDOM from 'react-dom/client';


function App(){
    
    return (
        <>
           
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

function Fetchuser(){
    useEffect(async ()=>{
        dispatch(LoadingData(true));  
        try{
            const response = await fetch("");
            const da = await response.json();
            dispatch(UpdateData(da));
        }
        catch(error){
            dispatch(ErrorData("Error Occured !"))
        }
    })
}