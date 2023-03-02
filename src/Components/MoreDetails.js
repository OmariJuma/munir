import i from "./../assets/images/rim2.jpeg";
import Input from "../Components/UI/Input";
import "./MoreDetails.css";
import { Card, Carousel, Col, Row, ListGroup } from "react-bootstrap";
import Rating from "./UI/Rating";
import { ButtonCart } from "./UI/ButtonCustom";
import { FaCheck, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { TbBrandSketch } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import CartContext from "./store/cart-context";
const MoreDetails = (props) => {
  const location = useLocation();
  const state = location.state;
  const cartCtx = useContext(CartContext);
  const price = `${state.price.toFixed(2)}`;

  const addToCartHandler = (amount=1) => {
    cartCtx.addItem({
      id: state.id,
      name: state.title,
      amount:amount,
      price: state.price,
      image:state.image
    });
  };

  return (
    <div className="container" style={{ backgroundColor: "#f9f9f9" }}>
      <div id="inp">
        <Input />
      </div>

      <Row className="more-details">
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
                  <strong style={{ marginRight: "1rem" }}>
                    KSH {price}
                  </strong>
                  <s style={{ color: "red" }}>KSH {state.offer}</s>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="faicon">
                    <FaClock />
                  </span>
                  <b style={{ marginRight: "1rem" }}>Warranty</b>
                  5 years <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="faicon">
                    <FaCheck />
                  </span>
                  <b style={{ marginRight: "1rem" }}>Instock </b>
                  100 units left <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating />
                </ListGroup.Item>
                <ButtonCart text="Add To Cart" onShowCart={props.onShowCart} onAdd={addToCartHandler} />
              </ListGroup>
            </Card.Body>

            {/* <ButtonCustom text='view product'/> */}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xm={12} sm={12} md={6} lg={6} xxl={6}>
          <Card style={{ marginTop: "2rem" }}>
            <Card.Body>
              <Card.Header>product Details</Card.Header>
              <Card.Text>
                Consequat cupidatat consequat mollit nostrud. Elit id ullamco
                fugiat in magna sunt velit nulla. Mollit laboris voluptate
                consectetur consectetur minim velit dolor consectetur anim
                veniam est ea sunt. Anim consequat tempor ea incididunt laboris.
                Laborum ipsum sint tempor ex id id cillum et dolor in elit
                adipisicing. Eiusmod et culpa culpa aliqua voluptate sint esse
                sunt tempor nostrud magna veniam cupidatat. Commodo eiusmod est
                adipisicing et irure proident ullamco laboris aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xm={12} sm={12} md={6} lg={6} xxl={6}>
          <Card style={{ marginTop: "2rem" }}>
            <Card.Body>
              <Card.Header>Product Specification</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b style={{ margin: "0 1rem 0 0" }}>Country of Origin</b>India
                  <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b style={{ margin: "0 1rem 0 0" }}>Dimensions</b>14/356/16
                  <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b style={{ margin: "0 1rem 0 0" }}> Weight in Kg</b>2kg
                  <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b style={{ margin: "0 1rem 0 0" }}> Material</b> Rubber
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
  );
};

export default MoreDetails;
