import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantMenu from "./component/RestaurantMenu";
import SearchFood from "./component/SearchFood";
import SecondaryHome from "./component/SecondaryHome";
import { Provider } from "react-redux"

function App() {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes >
                        <Route path="/" element={<Home />}></Route>
                        <Route element={<SecondaryHome />}>
                            <Route path="/restaurant" element={<Restaurant />}></Route>
                            <Route path="/city/delhi/:id" element={<RestaurantMenu />}></Route>
                            <Route path="/city/delhi/:id/search" element={<SearchFood />}></Route>
                        </Route>

                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://corsproxy.io/?"; 

