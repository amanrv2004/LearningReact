import React from "react";
import ReactDOM from "react-dom/client";


const name = "Aman";

const obj = {
   age:23,
   salary:123456789,
   gender:"male"
}
const obj2={
   backgroundColor:"black",
   color:"pink",
   fontSize:"30px",
}
const newElement = (
   <>
    <h1 id="first" className="second">Hello {name}.</h1>
    <h2 money={23}>Kaise ho.</h2>
    <h2 style={obj2}>Age is {obj.age}</h2>
   </>
)


//React Component -- 
// class based  (old method)
// function based 

function greet(){
   return <h1>Aur bhai Kaisa hai?</h1>
}    
const meet = () =>{
   return <h1> Mera bhi sab accha hai.</h1>
}

const newElement2 = greet();
const newElement3 = meet();

const newElement4 = (
   <>
     {newElement}
     {newElement2} 
     {newElement3}
   </>
)
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(newElement); 
Reactroot.render(newElement4); 