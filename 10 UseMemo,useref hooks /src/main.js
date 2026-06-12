import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";


function Fibbonnaci(n) {
    if (n <= 1) {
        return n;
    }
    return Fibbonnaci(n - 1) + Fibbonnaci(n - 2);
}
function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState("");
    // const [result,setResult] = useState("");

    //using useCallBack
    // const Fibbonnaci = useCallback((n) => {
    //     if (n <= 1) {
    //         return n;
    //     }
    //     return Fibbonnaci(n - 1) + Fibbonnaci(n - 2);
    // }, []);

    const result = useMemo(() => {
        return Fibbonnaci(Number(number))
    }, [number]);

    // useEffect(()=>{
    //     setResult(Fibbonnaci(number));
    // },[number])
    // useMemo take callBack function

    return (
        <>
            <h1>Counter is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <div>
                <h2>Fibbonnaci Number is : {result}</h2>
                <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} ></input>
                {/* <button onSubmit={Fibbonnaci(number)} >Submit</button> */}
            </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)


