import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
const NavBar = () => {
  const navbar = document.querySelector('.na');
window.onscroll = () => {
    if (window.scrollY > 300) {
      navbar.classList.toggle();
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
  return (
    <Navbar
      expand="lg"
      className="sticky-top na linkie"
      
    >
      <Container>
        <Navbar.Brand href="#home" className="linkie">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="linkie">
              Home
            </Nav.Link>
            <Nav.Link href="#home" className="linkie">
              Prodcuts
            </Nav.Link>
            {/* <NavDropdown title={<p classsName="linkie">Hi</p>} id="basic-nav-dropdown" bg='success'> */}
            {/* <NavDropdown.Item href="#action/3.2" > */}
            {/* Rims */}
            {/* </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.3" >Tyres</NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="#link" className="linkie">
              About us
            </Nav.Link>
            <Nav.Link href="#link" className="linkie">
              location
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <span className="cartIcon top right">
        <FaShoppingCart />
      </span>
    </Navbar>
  );
};
export default NavBar;
