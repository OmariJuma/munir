import i from "./../assets/images/rim2.jpeg";
import Input from "../Components/UI/Input";
import "./MoreDetails.css";
import { Card, Carousel, Col, Row, ListGroup } from "react-bootstrap";
import Rating from "./UI/Rating";
import ButtonCustom, { ButtonCart } from "./UI/ButtonCustom";
import { FaCheck, FaClock } from "react-icons/fa";
const MoreDetails = (props) => {
  return (
    <div className="container" style={{ backgroundColor: "#f9f9f9" }}>
      <div id="inp">
        {" "}
        <Input />
      </div>

      <Row className="more-details">
        <Col xs={12} sm={12} md={7} lg={8}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={i} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={i} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}>
          <Card>
            <Card.Body>
              <Card.Header>
                <b>Name:</b> Bf-goodrich 14/356/16 <br />
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Brand:</b> Bf-goodrich
                  <br />
                </ListGroup.Item>
                <ListGroup.Item className="priceNstrike">
                  <strong>KSH 24000</strong>
                  <s>KSH 27000</s>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>
                    Warranty
                    <span className="faicon">
                      <FaClock />
                    </span>
                  </b>
                  5 years <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <b>
                    Instock{" "}
                    <span className="faicon">
                      <FaCheck />
                    </span>
                  </b>{" "}
                  100 units left <br />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating />
                </ListGroup.Item>
                <ButtonCart text="Add To Cart" />
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