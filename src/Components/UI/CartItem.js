import styles from "./CartItem.module.css";
import {Col, Row} from 'react-bootstrap'

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]} key={props.key}>
      <Row>
        {/* <div className={styles.imgNtitle}>
        <img className={styles.img} src={props.image} alt="a product item"/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h4>{props.name}</h4>
        <span className={styles.price}>Price Kes {(price*1).toLocaleString()}</span>

        <div className={styles.summary}>
          </div>
        </div> */}
        {/* </div> */}
        <Col  sm={12} md={4} lg={4}>
          <img className={styles.img} src={props.image} alt="a product item" />
        </Col>
        <Col  sm={12} md={4} lg={4} className="text-center">
          <h4>{props.name}</h4>
          <span className={styles.price}>
            Price Kes {(price * 1).toLocaleString()}
          </span>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div
            className={`${styles.actions}`}
          >
            <span className={styles.price} style={{ marginBottom: "10px" }}>
            </span>

            <button onClick={props.onRemove}>−</button>
            <span className={styles.amount}>x {props.amount}</span>

            <button onClick={props.onAdd}>+</button>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default CartItem;
