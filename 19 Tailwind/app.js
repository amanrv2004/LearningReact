import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import Add from "./Add";


function App() {


    const [language, setLanguage] = useState(['TS', 'JS', 'JAVA']);

    function handleClick(){
        setLanguage(['C++',...language])
    }

    return (

        <>
            <div>
                {
                    // language.map((value, index) => <Add key={index} value={value} />)
                    language.map((value) => <Add key={value} value={value} />)
                }
            </div>
            <br/>
            <br/>
            <br/>
            <button onClick={handleClick}>Add Language</button>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
