import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
  <React.Fragment>
    <Header/>
    <Meals/>
  </React.Fragment>
  );
}

export default App;
