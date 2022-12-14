import Rim from "../assets/images/landing.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Microcard from "./Microcard";
import "./Caard.css";

const Caard = (props) => {
  const product = props.product;
  const fiveStar = 5;
  const zeroStar = 0;
  return (
    <>
      {!product && (
        <Card style={{ width: "300px" }} className="md-4 xl-3 ">
          <Microcard title={props.title} />
          <Card.Img src={Rim} />
          <Card.Body>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>

          <Button>
            See more
            <span bg="success">
              <FaArrowRight />
            </span>
          </Button>
        </Card>
      )}
      {product && (
        <Card style={{ width: "300px" }} className="md-3 xl-4">
          <Microcard title={props.title} />
          <Card.Img src={Rim} />
          <Card.Body>
            <Card.Text>
              {props.text}
              <div className="star">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Caard;
