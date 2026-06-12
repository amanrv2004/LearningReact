// useRef  - returns a object and have value in current , to access use money.current
// useRef render nahi karta hai sirf value ko hold karta hai (reference)
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

// function App() {
//     const [count, setCount] = useState(0);
//     //   let money = 0;
//     const money = useRef(0);

//     return (
//         <>
//             <h1>Counter is {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>

//             <h1>Money is {money.current}</h1>
//             <button onClick={() => {
//                 money.current = money.current + 1;
//             }}>Increment</button>
//         </>
//     )
// }


//------------------ project stop watch ---------------------

function StopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    
    function start() {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {       //setInterval ka kaam sirf setTime ko call kare every one second mai
                setTime(prevTime => prevTime + 1);         // setTime also have callBack 
            }, 1000);
            setIsRunning(true);
        }
    }
    function stop() {
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        }
    }
    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return (
        <>
            <h1>StopWatch is : {time}</h1>
            <button onClick={start}>Start</button>
            <br />
            <br />
            <button onClick={stop}>Stop</button>
            <br />
            <br />
            <button onClick={reset}>Reset</button>
        </>
    )

}





ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch />);