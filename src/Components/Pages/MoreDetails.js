import "./MoreDetails.css";
import { Card, Carousel, Col, Row, ListGroup, Button } from "react-bootstrap";
import Rating from "../UI/Rating";
import { ButtonCart } from "../UI/ButtonCustom";
import { FaCheck, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { TbBrandSketch } from "react-icons/tb";
import { useLocation } from "react-router";
import { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import Input from "../UI/Input";
import { lazy } from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import Warranty from "../../assets/images/icons/warranty.png";
const Footer = lazy(() => import("../UI/Footer"));

const MoreDetails = (props) => {
  const location = useLocation();
  const state = location.state;
  const cartCtx = useContext(CartContext);
  const price = `${state.price.toFixed(2)}`;
  const offer = `${state.offer.toFixed(2)}`;

  const addToCartHandler = (amount = 1) => {
    cartCtx.addItem({
      id: state.id,
      name: state.title,
      amount: amount,
      price: state.price,
      image: state.image,
    });
  };

  const topRef = useRef(null);

  // scroll to the top of the page on mount
  // useEffect(() => {
  //   topRef.current.scrollIntoView({ behavior: "auto" });
  // }, []);

  return (
    <>
      <div className="container" ref={topRef}>
        <div id="inp">
          <Input />
        </div>

        <Row className="more-details" id="start">
          <Col xs={12} sm={12} md={6} lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={state.image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={state.image}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card>
              <Card.Body>
                <Card.Header>
                  <span className="faicon">
                    <SiNamecheap />
                  </span>
                  <b style={{ marginRight: "1rem" }}>Name:</b> {state.title}{" "}
                  <br />
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <span className="faicon">
                      <TbBrandSketch />
                    </span>
                    <b style={{ marginRight: "1rem" }}>Brand:</b> {state.brand}
                    <br />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="faicon" style={{ gap: "0" }}>
                      <FaMoneyBillWave />
                    </span>
                    <strong style={{ marginRight: "1rem", color: "green" }}>
                      KSH {price}
                    </strong>
                    <s style={{ color: "red" }}>KSH {offer}</s>
                  </ListGroup.Item>
                  <ListGroup.Item className="warrantyContainer">
                    <span className="faicon">
                      <FaClock />
                    </span>
                    <b style={{ marginRight: "1rem" }}>Warranty</b> <br />
                    <img src={Warranty} id="warranty" alt="One year warranty" />
                    <br />
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating />
                  </ListGroup.Item>
                  <Button className="bg-success">
                    <ReactWhatsapp
                      number="+254791567672"
                      message={`Hi, I want to purchase this Product: ${
                        state.title
                      }, Price: ${state.price}, Units: ${1}, Brand: ${
                        state.brand
                      }  url-> ${window.location.href}`}
                      style={{ color: "white", gap: "20px" }}
                    >
                      <FaWhatsapp style={{ color: "white" }} />
                      Order on Whatsapp
                    </ReactWhatsapp>
                  </Button>
                  <br />
                  <ButtonCart
                    text="Add To Cart"
                    onShowCart={props.onShowCart}
                    onAdd={addToCartHandler}
                  />
                </ListGroup>
              </Card.Body>

              {/* <ButtonCustom text='view product'/> */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ marginTop: "2rem" }}>
              <Card.Body>
                <Card.Header>product Details</Card.Header>
                <Card.Text>{state.description}</Card.Text>
              </Card.Body>
              {/* </Card> */}
              {/* </Col>
          <Col xm={12} sm={12} md={6} lg={6} xxl={6}> */}
              {/* <Card style={{ marginTop: "2rem" }}> */}
              <Card.Body>
                <Card.Header>Product Specification</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <b style={{ margin: "0 1rem 0 0" }}>Country of Origin</b>
                    India
                    <br />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b style={{ margin: "0 1rem 0 0" }}>Dimensions</b>
                    {state.description}
                    <br />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b style={{ margin: "0 1rem 0 0" }}> Weight in Kg</b>2kg
                    <br />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b style={{ margin: "0 1rem 0 0" }}> Material</b>{" "}
                    {state.material}
                    <br />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b style={{ margin: "0 1rem 0 0" }}> Warranty</b>5 years
                    <br />
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h6>Related items</h6>
      </div>
      <Footer />
    </>
  );
};

export default MoreDetails;
