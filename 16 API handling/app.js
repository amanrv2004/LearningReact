const { useEffect } = require("react");
import React from "react";
import ReactDOM from 'react-dom/client';
import stores from "./src/stores"
import { Provider } from "react-redux";
import CoinCreate from "./src/CoinCreate";


function App(){
    
    return (
        <>
           <Provider store={stores}>
                <CoinCreate/>
           </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// function Fetchuser(){
//     useEffect(async ()=>{
//         dispatch(LoadingData(true));  
//         try{
//             const response = await fetch("");
//             const da = await response.json();
//             dispatch(UpdateData(da));
//         }
//         catch(error){
//             dispatch(ErrorData("Error Occured !"))
//         }
//     })
// }