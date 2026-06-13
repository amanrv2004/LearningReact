import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Second from "./src/second";

function App(){
    const [count,setCount] = useState(3);
    return (
        <>
            <h1>Hello Aman</h1>
            <Second count={count} setCount= {setCount}/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)


