import React, {useState} from "react";
import ReactDOM from "react-dom/client";



function Counter(){
    let [count, setCount] = useState(0);  // useState return an Array
    
    function incrementNumber(){
        count++;
        setCount(count);
        // setCount(count+1);    we can use this 
    }
    function decrementNumber(){
        count--;
        setCount(count);
        // setCount(count-1);   we can use this 
    }
    return (
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementNumber}>Increment </button>
        <button onClick={decrementNumber}>Decrement </button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)


