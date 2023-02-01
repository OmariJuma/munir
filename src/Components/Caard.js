
import Rim from "../assets/images/rim2.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Microcard from "./Microcard";
import "./Caard.css";
import Rating from "./UI/Rating";
import ICard from "./UI/ICard";
import ButtonCustom from "./UI/ButtonCustom";
import MoreDetails from "./MoreDetails";

const Caard = (props) => {
  const product = props.product;
  const rating = 1;
  const zeroStar = 0;

  const onClickHandler=(e)=>{
    // e.preventDefault()
   return( <MoreDetails image={props.title} title={props.title} text={props.text} price={props.price} discount={props.offer}/>)
  }

  return (
    <>
      {product && (
        <a target={<MoreDetails/>} className="products" onClick={onClickHandler}>
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
        </a>
      )}
    </>
  );
};

export default Caard;
