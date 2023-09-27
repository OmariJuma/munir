import styles from "./ButtonCustom.module.css";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


const ButtonCustom = (props) => {
  const variant = props.variant;
  const onClickHandler = () => {};
  return (
    <>
      {variant =="tyres" && (
        <Link
          style={{ color: "red", border: "2px solid red" }}
          id={styles.btn}
         to="/products/tyres"
        >
          {props.text}
        </Link>
      )}
      {variant=="rims" && (
        <Link
          className={styles.variant}
          id={styles.btn}
          to="/products/rims"

          onClick={onClickHandler}
        >
          {props.text}
        </Link>
      )}
      {variant=="booking" && (
        <Link
          className={styles.variant}
          id={styles.btn}
          to="/booking"

          onClick={onClickHandler}
        >
          {props.text}
        </Link>
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
