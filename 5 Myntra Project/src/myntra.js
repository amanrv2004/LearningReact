import React ,{useState} from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy";
import { greet as goa, meet as roa } from "./utils/dummy"; // multiple import from single file
import { useState } from "react";





function App() {
  let [A,setA] = useState(arr);
  function SortArray() {
    A.sort((a,b)=>a.price-b.price);
    setA([...A]); // Arr  ay and Object
  }

  function PriceAbove500() {
    const B= arr.filter((value)=>value.price>499);
    setA(B);
  }

  return (<>
    <Header />

    <button onClick={SortArray}>Sort By Price</button>
    <button onClick={PriceAbove500}>Price Above 499 </button>
    <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {
        A.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price} />)
      }
    </div>
    <Footer />
  </>
  )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);