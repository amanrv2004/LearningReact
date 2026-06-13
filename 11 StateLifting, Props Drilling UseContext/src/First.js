import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import CountContext from "./context/Count";


function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={{count, setCount}}>
                <h1>Hello Aman {count}</h1>
                <Second/>
            </CountContext.Provider>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)



