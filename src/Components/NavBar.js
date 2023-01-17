import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./NavBar.css";
const NavBar = () => {
  return (
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
            <Nav.Item>
              <div id="searchCont">
                <input
                  type="search"
                  id="search"
                  placeholder="am looking for..."
                  autoComplete="off"
                />
                <Button className="sBtn" type="submit" variant="primary">
                  <FaSearch/>
                </Button>
              </div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Products" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Rims</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Tyres</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Rims and Tyres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Appointment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">About us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
