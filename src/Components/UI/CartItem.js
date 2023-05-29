import classes from "./CartItem.module.css";
import {Col, Row} from 'react-bootstrap'

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]} key={props.key}>
      <Row>
        {/* <div className={classes.imgNtitle}>
        <img className={classes.img} src={props.image} alt="a product item"/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h4>{props.name}</h4>
        <span className={classes.price}>Price Kes {(price*1).toLocaleString()}</span>

        <div className={classes.summary}>
          </div>
        </div> */}
        {/* </div> */}
        <Col  sm={12} md={4} lg={4}>
          <img className={classes.img} src={props.image} alt="a product item" />
        </Col>
        <Col  sm={12} md={4} lg={4} className="text-center">
          <h4>{props.name}</h4>
          <span className={classes.price}>
            Price Kes {(price * 1).toLocaleString()}
          </span>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div
            className={`${classes.actions}`}
          >
            <span className={classes.price} style={{ marginBottom: "10px" }}>
            </span>

            <button onClick={props.onRemove}>−</button>
            <span className={classes.amount}>x {props.amount}</span>

            <button onClick={props.onAdd}>+</button>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default CartItem;
