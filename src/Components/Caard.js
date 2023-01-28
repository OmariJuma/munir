import Rim from "../assets/images/rim2.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Microcard from "./Microcard";
import "./Caard.css";
import Rating from "./UI/Rating";
import ICard from "./UI/ICard";
import ButtonCustom from "./UI/ButtonCustom";

const Caard = (props) => {
  const product = props.product;
  const rating = 1;
  const zeroStar = 0;

  return (
    <>
      {!product && (
        <div className="pop">
          <Microcard title={props.title} un={props.un} />
          <ICard
            image={props.image}
            txt={props.text}
            header={true}
            style={{ width: "250px" }}
            
          />
        </div>
      )}
      {product && (
        <div className="products">
          <Card style={{textAlign:"left",marginBottom: '1.5rem'
}}>
            <div id="aboveCardContainer">
              <h5 id="aboveCard">{props.title}</h5>
            </div>
            <Card.Img src={props.image} />
            <Card.Body>

              <Card.Text style={{marginBottom:"2rem"}}>
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
        </div>
      )}
    </>
  );
};

export default Caard;
