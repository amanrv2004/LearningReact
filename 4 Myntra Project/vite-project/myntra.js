import React from "react";
import ReactDOM from "react-dom/client";

// header
// body
// footer
// function Header() {
//     return (
//         <>
//             <img src="https://i.pinimg.com/1200x/05/71/89/057189610e860c8a86b4fef2b70d0947.jpg" alt="logo" height="50px" width="50px" />
//             <ol display="flex" >
//                 <li>MEN</li>
//                 <li>WOMEN</li>
//                 <li>KIDS</li>
//                 <li>HOME</li>
//                 <li>Beauty</li>
//                 <li>GENZ</li>
//                 <li>STUDIO</li>

//             </ol>
//         </>
//     )
// }
function Card(props) {
    return (
        <>
            <div style={{ border: "2px solid black", padding: "2px", margin: "5px" }}>
                <img src="https://www.thewalkdeal.com/cdn/shop/products/Alone-NavyBlue.jpg?v=1640675727" alt="" height="200px" width="200px" />
                <div style={{ textAlign: "center" }}>
                    <h2>{props.cloth}</h2>
                    <h1>{props.offer}</h1>
                    <h2>Shop Now</h2>
                </div>
            </div>
        </>
    )
}

const arr = [{ cloth: "T-shirt", offer: "20-80% off" }, { cloth: "Jeans", offer: "10-50% off" }, { cloth: "Pant", offer: "50-80% off" }, { cloth: "T-shirt", offer: "20-80% off" }, { cloth: "Shirt", offer: "20-80% off" }, { cloth: "Jeans", offer: "10-50% off" }]

function App() {
    return (
        <>

            {/* <div >
            <Header />
            </div > */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {
                    arr.map((value, index) => (
                        <Card key={index} cloth={value.cloth} offer={value.offer} />
                    ))
                }
            </div>

        </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />); 