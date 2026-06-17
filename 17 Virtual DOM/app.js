import React, { createElement } from "react";
import ReactDOM from 'react-dom/client';
import Add from "./Add";
const arr = [1,2,3,4,2,5]

function App(){
    
//    const Vdom = <h1>Hello</h1>;
//    const RDom = createElement('h1');
//    RDom.innerText = "Aman";
//    console.log(Vdom);
//    console.dir(RDom);




    return (
        <>
           {
            arr.map((value,index)=><Add key={index} />)      //key ={index} mat rakho index sirf index dega 
            }
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
