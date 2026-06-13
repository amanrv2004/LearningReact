import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [count,setCount] = useState(0)

    return(
        <>
            <h1>Count is {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


