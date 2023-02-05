import i from "./../assets/images/rim2.jpeg";
import Input from "../Components/UI/Input";
import "./MoreDetails.css";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "./UI/Rating";
import ButtonCustom from "./UI/ButtonCustom";
const MoreDetails = (props) => {
  return (
    <div className="container">
      <div id="inp">
        {" "}
        <Input />
      </div>

      <Row className="more-details">
        <Col xs={12} sm={12} md={7} lg={8} >
        <img src={i} alt="product description"/>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4}>
        <Card>
          <Card.Body>
            <Card.Text style={{ marginBottom: "2rem" }}>
            <b>Bf-goodrich 14/356/16</b> amet sunt nisi ut fugiat
              ad consectetur fugiat culpa. Consequat eiusmod et nisi tempor et
              sint cillum cillum aliquip veniam quis nostrud. Reprehenderit
              tempor qui esse commodo veniam magna laboris consequat do nostrud
              irure. Duis ut minim velit tempor amet. Do culpa sit deserunt elit
              non consectetur. Deserunt ex ea anim non dolor.

                <div className="priceNstrike">
                  <strong>KSH 24000</strong>
                  <s>KSH 27000</s>
                </div>
                <Rating />
              </Card.Text>
              <ButtonCustom text="Add To Cart" variant={true}/>

          </Card.Body>
          {/* <ButtonCustom text='view product'/> */}
        </Card>
        </Col>
      </Row>
      <h6>Related items</h6>
    </div>
  );
};

export default MoreDetails;
