import i from "./../assets/images/rim2.jpeg";
import Input from "../Components/UI/Input";
import "./MoreDetails.css";
import { Card, Carousel, Col, Row } from "react-bootstrap";
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
              <Card.Title>
                <b>Name:</b> Bf-goodrich 14/356/16 <br />
              </Card.Title>
              <Card.Text>
                <div style={{ margin: "1.5rem 0" }}>
                  {" "}
                  <b style={{ margin: "1.5rem 0" }}>Brand:</b> Bf-goodrich{" "}
                  <br />
                </div>
                <div className="priceNstrike" style={{ margin: "1.5rem 0" }}>
                  <strong>KSH 24000</strong>
                  <s>KSH 27000</s>
                </div>
                <div style={{ margin: "1.5rem 0" }}>
                  {" "}
                  <b>
                    Warranty{" "}
                    <span className="faicon">
                      <FaClock />
                    </span>
                  </b>
                  5 years <br />
                </div>
                <div style={{ margin: "1.5rem 0" }}>
                  {" "}
                  <b style={{ margin: "1.5rem 0" }}>
                    Instock{" "}
                    <span className="faicon">
                      <FaCheck />
                    </span>
                  </b>{" "}
                  100 units left <br />
                </div>

                <Rating />
              </Card.Text>
              <ButtonCart text="Add To Cart" />
            </Card.Body>
            {/* <ButtonCustom text='view product'/> */}
          </Card>
        </Col>
      </Row>
      <Card style={{marginTop:"2rem"}}>
        <Card.Body>
        <Card.Title>product Details</Card.Title>
        <Card.Text>Consequat cupidatat consequat mollit nostrud. Elit id ullamco fugiat in magna sunt velit nulla. Mollit laboris voluptate consectetur consectetur minim velit dolor consectetur anim veniam est ea sunt. Anim consequat tempor ea incididunt laboris. Laborum ipsum sint tempor ex id id cillum et dolor in elit adipisicing. Eiusmod et culpa culpa aliqua voluptate sint esse sunt tempor nostrud magna veniam cupidatat. Commodo eiusmod est adipisicing et irure proident ullamco laboris aliqua.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{marginTop:"2rem"}}>
        <Card.Body>
        <Card.Title>Product Specification</Card.Title>
        <Card.Text>
          <b>Country of Origin</b>India<br/>
          <b>Dimensions</b>14/356/16<br/>
          <b>Weight in Kg</b>2kg<br/>
          <b>Material</b> Rubber<br/>
          <b>Warranty</b>5 years<br/>
        </Card.Text>
        </Card.Body>
      </Card>
      <h6>Related items</h6>
    </div>
  );
};

export default MoreDetails;
