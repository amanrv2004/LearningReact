import React from "react";
import ReactDOM from "react-dom/client";


const element1 = <h1>Hello Aman</h1>

// props = {
//     name:"Aman",
//     age:23
// }


function Greet(props){
    return <h2>Ram Ram {props.name} and age is {props.age} </h2>
}

const element2 = <Greet name="Aman" age="23" id="first" />

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2); 