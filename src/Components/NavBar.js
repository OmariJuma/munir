import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
import Input from "./UI/Input";
import React, { useContext, lazy, Suspense, useRef } from "react";
import {
  Link,
  BrowserRouter as Router,
  // BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Crsl from "./../Components/Crsl";
import Services from "./../Components/Services";
import Success from "./../Components/Success";
import WhyUs from "./../Components/WhyUs";
import MySwiper from "./../Components/UI/MySwiper";
import Products from "./Pages/Products";
import CartContext from "./store/cart-context";
import logo from "./../assets/images/icons/logo300by150.svg";
import Spinner from "./UI/Spinner";

const MoreDetails = lazy(() => import("./MoreDetails"));
const Error404 = lazy(() => import("./Pages/Error404.js"));
const BookingPage = lazy(() => import("./Pages/BookingPage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));

const NavBar = (props) => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  //can you add a condition to the collapseNav function to check if the nav is collapsed or not and then collapse it if it is not collapsed and vice versa
  //execute the function when the nav is clicked
  //use the classList.contains method to check if the nav is collapsed or not
  //use the classList.add method to add the collapsed class to the nav
  //use the classList.remove method to remove the collapsed class from the nav
  function collapseNav() {
    if(!navButton.current.classList.contains("collapsed")){
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");}
    else{
      navButton.current.classList.remove("collapsed");
      linksContainerRef.current.classList.add("show");
    }
    
  }
  //should I handle the state globally or locally?
  //I think I should handle the state globally because I want to access the state from different components
  //I will use the useContext hook to handle the state globally
  //I will create a context folder and inside it I will create a file called cart-context.js
  //I will create a CartContext using the createContext method
  //I will create a CartProvider component that will wrap the App component
  //I will create a cartCtx constant and assign it the value returned from the useContext hook
  //will it solve the of re-rendering the navigation bar when the i visit a new page?  yes it will solve the problem of re-rendering the navigation bar when I visit a new page because the navigation bar will not re-render when the state changes because the state is handled globally and not locally and the navigation bar is not a child of the CartProvider component so it will not re-render when the state changes

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Navbar
          expand="lg"
          className="navbar navbar-expand-sm navbar-right "
          id="top"
        >
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Navbar.Toggle
              ref={navButton}
              aria-controls="basic-navbar-nav"
              data-bs-toggle="collapse"
              data-bs-target="#basic-navbar-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <GiHamburgerMenu />
              </span>
            </Navbar.Toggle>

            <Navbar.Brand href="/" className="linkie bt-2">
              <img src={logo} alt="logo" id="muneerLogo" />
            </Navbar.Brand>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
              ref={linksContainerRef}
            >
              <Nav
                variant="tabs"
                className="justify-content-center"
                activeKey="/"
              >
                <Nav.Item id="search">
                  <Input />
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} onClick={collapseNav} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Products" id="nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    onClick={collapseNav}
                    to="/products/rims"
                    eventKey="4.1"
                  >
                    Rims
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={collapseNav}
                    to="/products/tyres"
                    eventKey="4.2"
                  >
                    Tyres
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/products"
                    onClick={collapseNav}
                    eventKey="4.3"
                  >
                    Rims and Tyres
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/booking"
                    onClick={collapseNav}
                    eventKey="link-2"
                  >
                    Booking
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/about-us"
                    onClick={collapseNav}
                    eventKey="link-2"
                  >
                    About us
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <span className="cartIcon">
              <button>
                <FaRegUserCircle />
              </button>
              <button onClick={props.onShowCart}>
                <FaCartPlus />
                <span id="badge">{numberOfCartItems}</span>
              </button>
            </span>
          </div>
        </Navbar>
        <div>
          <Routes>
            <Route
              path="/products/rims"
              element={<Products />}
              exact
              errorElement={<Error404 />}
            />

            <Route
              path="/products/tyres"
              element={<Products />}
              exact
              errorElement={<Error404 />}
            />
            <Route
              path="/products"
              element={<Products />}
              exact
              errorElement={<Error404 />}
            />

            <Route
              path="/booking"
              element={<BookingPage />}
              exact
              errorElement={<Error404 />}
            />

            <Route path="/about-us" element={<AboutUs />} exact />
            <Route
              path="/details/:id"
              element={<MoreDetails onShowCart={props.onShowCart} />}
              exact
            />
            <Route path="*" exact element={<Error404 />} />
            <Route
              path="/"
              element={
                <div className="Container-fluid">
                  <Crsl />
                  <Products />

                  <Services />
                  <WhyUs />

                  <Success />

                  <MySwiper />
                </div>
              }
              errorElement={<Error404 />}
              exact
            />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
export default NavBar;
