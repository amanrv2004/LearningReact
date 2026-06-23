import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RestaurantMenu from "./component/RestaurantMenu";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes >
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/restaurant" element={<Restaurant/>}></Route>
                        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://corsproxy.io/?"; 

