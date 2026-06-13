import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import CountContext from "./context/Count";
import { useContext } from 'react'


function App() {
    const [count, setCount] = useState(0);



    return (
        <>
            <CountContext.Provider value={{count, setCount}}>
                <h1>Hello Aman</h1>
                <Second count={count} setCount={setCount} />
            </CountContext.Provider>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)



