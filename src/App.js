import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import CartItem from "./Components/UI/CartItem";
import Footer from "./Components/UI/Footer";
// import BreadCrumb from "./Components/UI/BreadCrumb";


function App() {
  const [cartIsOpen,setCartIsOpen]=useState(false);

const showCart=()=>{
  setCartIsOpen(true)
}
const hideCart=()=>{
  setCartIsOpen(false)
}

  return (<>
      <NavBar onShowCart={showCart}/>
      {/* <BreadCrumb/> */}
    <Footer/>
    {cartIsOpen&&<CartItem onHideCart={hideCart}/>}

    </>
  );
}

export default App;
