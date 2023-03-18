import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']} key={props.key}>
      <div>
        <div className={classes.imgNtitle}>
        <img className={classes.img} src={props.image} alt="a product item"/>
        <h4>{props.name}</h4>
      </div>
        <div className={classes.summary}>
          <span className={classes.price}>Kes {price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
