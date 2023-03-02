import Rim from "../assets/images/rim2.jpeg";
import Card from "react-bootstrap/Card";
import "./Caard.css";
import Rating from "./UI/Rating";
import { Link } from "react-router-dom";


const Caard = (props) => {
  const product = props.product;
  const rating = 1;
  const zeroStar = 0;
  const data = {
    id: props.id,
    price: props.price,
    title: props.title,
    text: props.description,
    offer: props.offer,
    image: props.image,
  };

  return (
    <>
      {product && (
        <div className="products">
          <Link to="details" state={data}>
            <Card style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              <div id="aboveCardContainer">
                <h5 id="aboveCard">{props.title}</h5>
              </div>
              <Card.Img src={props.image} />
              <Card.Body>
                <Card.Text style={{ marginBottom: "2rem" }}>
                  {props.description}
                  <div className="priceNstrike">
                    <strong>KSH {props.price}</strong>
                    <s>KSH {props.offer}</s>
                  </div>
                  <Rating />
                </Card.Text>
              </Card.Body>
              {/* <ButtonCustom text='view product'/> */}
            </Card>
          </Link>
        </div>
      )}
    </>
  );
};

export default Caard;
