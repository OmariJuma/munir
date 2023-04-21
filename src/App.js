import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import CartProvider from "./Components/store/CartProvider";
import Cart from "./Components/UI/Cart";
import ErrorBoundary from "./Components/UI/ErrorBoundary";
import Footer from "./Components/UI/Footer";
import SidebarIcons from "./Components/UI/SidebarIcons";
import Spinner from "./Components/UI/Spinner";
import SearchModal from "./Components/UI/SearchModal";
// import BreadCrumb from "./Components/UI/BreadCrumb";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCart = () => {
    setCartIsOpen(true);
  };
  const hideCart = () => {
    setCartIsOpen(false);
  };

  return (
    <ErrorBoundary>
    <CartProvider>
      <Suspense fallback={<Spinner />}>
        <NavBar onShowCart={showCart} />
        <SearchModal/>
        {/* <BreadCrumb/> */}
        <SidebarIcons />

        <Footer/>
        {cartIsOpen && <Cart onHideCart={hideCart} />}
      </Suspense>
    </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
