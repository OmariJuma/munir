import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
import Input from "./UI/Input";
import React, { useContext, lazy, Suspense, useState } from "react";
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
import Offcanvas from 'react-bootstrap/Offcanvas';

const MoreDetails = lazy(() => import("./MoreDetails"));
const Error404 = lazy(() => import("./Pages/Error404.js"));
const BookingPage = lazy(() => import("./Pages/BookingPage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));


const NavBar = (props) => {
  const [show, setShow] =useState(false);
  const handleOpenOffcanvas = () => setShow(true);
  const handleCloseOffcanvas = () => setShow(false);

  const cartCtx = useContext(CartContext);
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
              aria-controls="basic-navbar-nav"
              data-bs-toggle="collapse"
              data-bs-target="#offcanvasNavbar-expand-"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleOpenOffcanvas}
            >
              <span>
                <GiHamburgerMenu />
              </span>
            </Navbar.Toggle>

            <Navbar.Brand href="/" className="linkie bt-2">
              <img src={logo} alt="logo" id="muneerLogo" />
            </Navbar.Brand>
            <Navbar.Offcanvas
              show={show}
              id="offcanvasNavbar-expand-"
              aria-labelledby="offcanvasNavbarLabel-expand-"
               placement="start"
               style={{width:"90vw", backgroundColor:"#39bce5"}}
              onHide={() => setShow(false)}
>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-">
                <img src={logo} alt="logo" id="muneerLogo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav
                variant="tabs"
                className="justify-content-center"
                activeKey="/"
              >
                <Nav.Item id="search">
                  <Input />
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} onClick={handleCloseOffcanvas} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Products" id="nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    onClick={handleCloseOffcanvas}
                    to="/products/rims"
                    eventKey="4.1"
                  >
                    Rims
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={handleCloseOffcanvas}
                    to="/products/tyres"
                    eventKey="4.2"
                  >
                    Tyres
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/products"
                    onClick={handleCloseOffcanvas}
                    eventKey="4.3"
                  >
                    Rims and Tyres
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/booking"
                    onClick={handleCloseOffcanvas}
                    eventKey="link-2"
                  >
                    Booking
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/about-us"
                    onClick={handleCloseOffcanvas}
                    eventKey="link-2"
                  >
                    About us
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              </Offcanvas.Body>
</Navbar.Offcanvas>
            
            
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
