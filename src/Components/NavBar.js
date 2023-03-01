import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus, FaRegUserCircle} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
import Input from "./UI/Input";
import React, { useState } from "react";
import {
  Link,
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Crsl from "./../Components/Crsl";
import Services from "./../Components/Services";
import Success from "./../Components/Success";
import WhyUs from "./../Components/WhyUs";
import MySwiper from "./../Components/UI/MySwiper";
import MoreDetails from "./MoreDetails";
import Error404 from "./Pages/Error404.js";
import BookingPage from "./Pages/BookingPage";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
const NavBar = (props) => {
  // const data = {
  //   key: props.key,
  //   price: props.price,
  //   title: props.title,
  //   text: props.description,
  //   offer: props.offer,
  //   image: props.image,
  // };
      const data={
      id: 8,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
    }

  return (
    <Router>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-sm navbar-right "
      >
        <div className="container" style={{display:"flex",justifyContent:"space-around"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>
              <GiHamburgerMenu />
            </span>
          </Navbar.Toggle>

          <Navbar.Brand href="#home" className="linkie bt-2">
            Muneer Automotive
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav
              variant="tabs"
              className="justify-content-center"
              activeKey="/home"
            >
              <Nav.Item id="search">
                <Input />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Products" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="products/rims" eventKey="4.1">
                  Rims
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="products/tyres" eventKey="4.2">
                  Tyres
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="products/rimsNtyres"
                  eventKey="4.3"
                >
                  Rims and Tyres
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link as={Link} to="booking" eventKey="link-2">
                  Booking
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="about-us" eventKey="link-2">
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
            <FaCartPlus/>
            </button>

          </span>

        </div>
      </Navbar>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="Container-fluid">
                <Crsl />
                <Products/>

                <Services />
                <WhyUs />

                <Success />

                <MySwiper />
              </div>
            }
            errorElement={<Error404 />}
            exact
          />
          <Route
            path="products/rims"
            element={<Products/>}
            exact
            errorElement={<Error404 />}
          />

          <Route
            path="products/tyres"
            element={<Products/>}
            exact
            errorElement={<Error404 />}
          />
          <Route
            path="products/rimsNtyres"
            element={<Products />}
            exact
            errorElement={<Error404 />}
          />

          <Route
            path="booking"
            element={<BookingPage/>}
            exact
            errorElement={<Error404 />}
          />

          <Route path="about-us" element={<AboutUs/>} exact />
          <Route path="/details" element={<MoreDetails />} exact />
          <Route path="*" exact element={<Error404 />} />
        </Routes>
      </div>
    </Router>
 
  );
};
export default NavBar;
