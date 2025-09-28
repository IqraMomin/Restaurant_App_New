import React,{useState} from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = ()=>{
      setShowCart(true);
  }

  const closeCartHandler = ()=>{
      setShowCart(false);
  }
  return (
  <React.Fragment>
    {showCart && <Cart onCloseCart={closeCartHandler}/>}
    <Header onShowCart={showCartHandler} />
    <Meals/>
  </React.Fragment>
  );
}

export default App;
