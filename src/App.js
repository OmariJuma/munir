import {Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import CartProvider from "./Components/store/CartProvider";
import ErrorBoundary from "./Components/UI/ErrorBoundary";
import SidebarIcons from "./Components/UI/SidebarIcons";
import Spinner from "./Components/UI/Spinner";
import SearchModal from "./Components/UI/SearchModal";
import UserProvider from "./Components/store/UserProvider";
// import BreadCrumb from "./Components/UI/BreadCrumb";
function App() {

  return (
    <UserProvider>
      <ErrorBoundary>
        <CartProvider>
          <Suspense fallback={<Spinner />}>
            <NavBar />
            <SearchModal />
            {/* <BreadCrumb/> */}
            <SidebarIcons />
          </Suspense>
        </CartProvider>
      </ErrorBoundary>
    </UserProvider>
  );
}

export default App;
