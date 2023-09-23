import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
import Input from "./UI/Input";
import React, { useContext, Suspense, useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  // BrowserRouter as Router,
} from "react-router-dom";
import CartContext from "./store/cart-context";
import logo from "./../assets/images/icons/logo300by150.svg";
import Spinner from "./UI/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";
import UserContext from "./store/user-context";
import Cart from "./UI/Cart";
import MyRoutes from "./Utilities/Routes";

const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false); // Manage cart state here

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { user } = useContext(UserContext);

  const handleOpenOffcanvas = () => setShow(true);
  const handleCloseOffcanvas = () => setShow(false);

  const showCart = () => {
    setCartIsOpen(true);
  };

  const hideCart = () => {
    setCartIsOpen(false);
  };
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
              style={{ width: "90vw", backgroundColor: "#39bce5" }}
              onHide={() => setShow(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-">
                  <Navbar.Brand href="/" className="linkie bt-2">
                    <img src={logo} alt="logo" id="muneerLogo" />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  variant="tabs"
                  className="justify-content-center"
                  activeKey="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Nav.Item id="search">
                    <Input onClose={handleCloseOffcanvas} />
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
                  <Nav.Item>
                    <Nav.Link
                      as={Link}
                      to="/beforeAfter"
                      onClick={handleCloseOffcanvas}
                      eventKey="link-2"
                    >
                      Before Vs After
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <span className="cartIcon">
              {/* <Input onClose={handleCloseOffcanvas}/> */}
              <button id="searchBtn" onClick={handleOpenOffcanvas}>
                <FaSearch />
              </button>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  as={Link}
                  to={user ? `/profile/${user.id}` : "/profile/:id"}
                  className="profileIcon"
                >
                  <FaRegUserCircle />
                  {user && (
                    <small>
                      Hi {user.name !== undefined && user.name.familyName}
                      {user.details !== undefined && user.details.firstName}
                    </small>
                  )}
                </Dropdown.Toggle>
              </Dropdown>
              <button onClick={showCart}>
                <FaCartPlus />
                <span id="badge">{numberOfCartItems}</span>
              </button>
            </span>
          </div>
        </Navbar>
        <div>
          <MyRoutes user={user} showCart={showCart}/>
          {cartIsOpen && <Cart onHideCart={hideCart} />}
        </div>
      </Router>
    </Suspense>
  );
};
export default NavBar;
