import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption";
import GroceryOption from "./component/GroceryOption";
function App() {
  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);