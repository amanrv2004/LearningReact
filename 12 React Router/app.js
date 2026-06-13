import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route, Routes} from "react-router";
import Home from "./src/Home";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contact";

function App(){

    return(
           <>
               <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/Contact" element={<Contact/>}></Route>
                        <Route path="/Dashboard" element={<Dashboard/>}></Route>
                    </Routes>
               </BrowserRouter>

           </> 
        )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


