import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart} from "react-icons/fa";
import './NavBar.css';
const NavBar = () => {
  return (
    <Navbar  expand="lg" className="sticky-top na">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              Rims
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tyres</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">location</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <span className="cartIcon top right"><FaShoppingCart /></span>
  </Navbar>  );
};
export default NavBar;
