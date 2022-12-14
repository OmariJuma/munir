import Rim from "../assets/images/rim2.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaArrowRight} from "react-icons/fa";
import Microcard from "./Microcard";
import "./Caard.css";
import Rating from "./UI/Rating";

const Caard = (props) => {
  const product = props.product;
  const rating = 1;
  const zeroStar = 0;

  return (
    <>
      {!product && (
        <Card style={{ width: "300px" }}>
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
     
        <Card style={{ width: "300px" }}>
          <Microcard title={props.title} />
          <Card.Img src={Rim} />
          <Card.Body>
            <Card.Text>
            <Rating/>
              {props.description}
              <div className="priceNstrike">
              <strong >KSH {props.price}</strong>
              <s>KSH {props.offer}</s>
              </div>
              
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Caard;
