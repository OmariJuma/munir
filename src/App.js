import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import CartProvider from "./Components/store/CartProvider";
import Cart from "./Components/UI/Cart";
import Footer from "./Components/UI/Footer";
import SidebarIcons from "./Components/UI/SidebarIcons";
// import BreadCrumb from "./Components/UI/BreadCrumb";


function App() {
  const [cartIsOpen,setCartIsOpen]=useState(false);

const showCart=()=>{
  setCartIsOpen(true)
}
const hideCart=()=>{
  setCartIsOpen(false)
}

  return (<CartProvider>
      <NavBar onShowCart={showCart}/>
      {/* <BreadCrumb/> */}
      <SidebarIcons/>

    <Footer/>
    {cartIsOpen&&<Cart onHideCart={hideCart}/>}
    </CartProvider>
  );
}

export default App;
