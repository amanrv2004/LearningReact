import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption"
function App() {
  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);