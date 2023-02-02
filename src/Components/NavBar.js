import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
import Input from "./UI/Input";
import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Crsl from "./../Components/Crsl";
import Services from "./../Components/Services";
import Products from "./../Components/Products";
import Success from "./../Components/Success";
import WhyUs from "./../Components/WhyUs";
import MySwiper from "./../Components/UI/MySwiper";
import MoreDetails from "./MoreDetails";
import Error404 from "./Pages/Error404.js";

const NavBar = (props) => {
  // const data = {
  //   key: props.key,
  //   price: props.price,
  //   title: props.title,
  //   text: props.description,
  //   offer: props.offer,
  //   image: props.image,
  // };


  const passDataHandler=(data)=>{
    console.log("In Navbar the values have been received");
    window.da=data;
console.log(data.title);
const {title}=passDataHandler;
console.log(title)
  }
  return (
    <Router>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-sm navbar-right sticky-top "
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>
              <GiHamburgerMenu />
            </span>
          </Navbar.Toggle>

          <Navbar.Brand href="#home" className="linkie bt-2">
            Muneer Automotive
          </Navbar.Brand>
          <span className="cartIcon">
            <FaRegUserCircle />
          </span>
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
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="Container-fluid">
                <Crsl />
                <Products onPassData={passDataHandler}/>

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
            element={<WhyUs />}
            exact
            errorElement={<Error404 />}
          />

          <Route
            path="products/tyres"
            element={<WhyUs />}
            exact
            errorElement={<Error404 />}
          />
          <Route
            path="products/rimsNtyres"
            element={<MySwiper />}
            exact
            errorElement={<Error404 />}
          />

          <Route
            path="booking"
            element={<WhyUs />}
            exact
            errorElement={<Error404 />}
          />

          <Route path="about-us" element={<WhyUs />} exact />
          <Route path="products/details" element={<MoreDetails data={window.da} />} exact />
          <Route path="*" exact element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
};
export default NavBar;
