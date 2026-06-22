import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);