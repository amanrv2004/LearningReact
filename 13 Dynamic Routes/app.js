import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./src/Home";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contact";
import Nav from "./src/Nav";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";
import Github from "./src/Github";

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="/Dashboard" element={<Dashboard />}></Route>
                    <Route path="/Details" element={<Details />}>
                        <Route index element={<Zero />}></Route>
                        <Route path="Hello" element={<Hello />}></Route>
                        <Route path="Hi" element={<Hi />}></Route>
                    </Route>

                    {/* Github Dyanamic Routes */}
                    <Route path="/Github/:name" element={<Github/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)


