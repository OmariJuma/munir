import styles from "./ButtonCustom.module.css";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

const ButtonCustom = (props) => {
  const variant = props.variant;
  const onClickHandler = () => {};
  return (
    <>
      {!variant && (
        <button
          type="button"
          style={{ color: "red", border: "2px solid red" }}
          id={styles.btn}
        >
          {props.text}
        </button>
      )}
      {variant && (
        <button
          type="button"
          className={styles.variant}
          id={styles.btn}
          onClick={onClickHandler}
        >
          {props.text}
        </button>
      )}
    </>
  );
};
export const ButtonCart = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  var [cartItems, setCartItems] = useState(1);

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsAddedToCart(true);
    console.log("Added to cart");
  };

  return (
    <>
      {!isAddedToCart && (
        <button
          type="submit"
          className={styles.btnCart}
          id={styles.btn}
          onClick={(e)=>{onClickHandler(e);props.onAdd(); }}
        >
          <span style={{ color: "var(--orange)", marginRight: "1rem" }}>
            <FaCartPlus />
          </span>
          {props.text}
        </button>
      )}
      <div className={styles.addMinus}>
        {isAddedToCart && (
          <button
            type="button"
            // className={styles.variant}
            id={styles.btn}
            onClick={props.onShowCart}          >
           <p>-</p>
          </button>
        )}
        {isAddedToCart && <p style={{marginBottom:"0"}}>{cartItems}</p>}
        {isAddedToCart && (
          <button
            type="button"
            // className={styles.variant}
            id={styles.btn}
            onClick={props.onShowCart}
          >
           <p>+</p> 
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonCustom;
