import { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";
import CartContext from "../store/cart-context";
// import { Navigate } from "react-router";
import { useNavigate } from "react-router";

const Cart = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const checkoutOpener = () => {
    props.onHideCart()
    return navigate("/checkout");
  };

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      {!hasItems && <h4>You have no items in the cart</h4>}
      <div className={styles.total}>
        <span>Total:</span>
        <span>Kes {parseFloat(totalAmount).toLocaleString()}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={checkoutOpener}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
