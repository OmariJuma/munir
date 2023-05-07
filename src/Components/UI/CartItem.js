import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']} key={props.key}>
      <div className='row'>
        <div className={classes.imgNtitle}>
        <img className={classes.img} src={props.image} alt="a product item"/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h4>{props.name}</h4>
        <span className={classes.price}>Price Kes {(price*1).toLocaleString()}</span>

        <div className={classes.summary}>
          </div>
        </div>
      </div>

      </div>

      <div className={`${"row me-0"} classes.actions`} style={{textAlign: "right",
    justifyContent: "right"}}>
        <span className={classes.price} style={{marginBottom:"10px"}}>SubTotal Kes {(price*props.amount).toLocaleString()}</span>

        <button onClick={props.onRemove}>−</button>
        <span className={classes.amount}>x {props.amount}</span>

        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
