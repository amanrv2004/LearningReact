import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import CountContext from "./context/Count";
import Fifth from "./fifth";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CountContext.Provider value={{count, setCount}}>
                <h1>Hello Aman {count}</h1>
                <Second/>
            </CountContext.Provider>
            <Fifth />
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)




//useContext is a alter of props passing in Descendent


// First create a Create Context
// Provide data ko uske andar : Descendent - CreatedContext.Provider value={}
// Consume the context - const {value} = useContext(CreatedContext);



