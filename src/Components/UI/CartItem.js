import classes from "./CartItem.module.css";
import Modal from "./Modal";
const CartItem = (props) => {
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  return (
    <Modal onClose={props.onHideCart}>
      {/* {cartItems} */}
      <h4>You have no items in the cart</h4>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>0</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartItem;
