import i from "./../assets/images/rim2.jpeg";
import Input from "../Components/UI/Input";
import "./MoreDetails.css";
import { Card, Col, Row } from "react-bootstrap";
const MoreDetails = (props) => {
  return (
    <>
      <div id="inp">
        {" "}
        <Input />
      </div>

      <Row className="more-details">
        <Col xs={12} sm={12} md={8} lg={8}>
        <img src={i} />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
        <Card>
          <div>
            <h5>product</h5>
          </div>
          {/* <Card.Img src={props.image} /> */}
          <Card.Body>
            <Card.Text>
              Excepteur ad exercitation ipsum aliquip amet sunt nisi ut fugiat
              ad consectetur fugiat culpa. Consequat eiusmod et nisi tempor et
              sint cillum cillum aliquip veniam quis nostrud. Reprehenderit
              tempor qui esse commodo veniam magna laboris consequat do nostrud
              irure. Duis ut minim velit tempor amet. Do culpa sit deserunt elit
              non consectetur. Deserunt ex ea anim non dolor.
            </Card.Text>
          </Card.Body>
          {/* <ButtonCustom text='view product'/> */}
        </Card>
        </Col>
      </Row>
    </>
  );
};

export default MoreDetails;
