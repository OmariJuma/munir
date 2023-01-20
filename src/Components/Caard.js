import Rim from "../assets/images/rim2.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Microcard from "./Microcard";
import "./Caard.css";
import Rating from "./UI/Rating";
import ICard from "./UI/ICard";

const Caard = (props) => {
  const product = props.product;
  const rating = 1;
  const zeroStar = 0;

  return (
    <>
      {!product && (
        <div className="pop">
          <Microcard title={props.title} un={props.un} />
          <ICard image={props.image} txt={props.text} header={true} style={{width:"250px"}}/>
        </div>
      )}
      {product && (
        <Card>
          {/* <Microcard title={props.title} /> */}
          <Card.Img src={Rim} />
          <Card.Body>
            <Card.Text>
              <Rating />
              {props.description}
              <div className="priceNstrike">
                <strong>KSH {props.price}</strong>
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
