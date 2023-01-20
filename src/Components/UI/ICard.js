import styles from "./Icard.module.css";
import { Button } from "react-bootstrap";
import fb from './../../assets/images/wheel3.jpeg';

const ICard = (props) => {
  return (
    <div className={styles.container1}>
      <img src={`${props.image?props.image:fb}`} alt="" style={{ width: "100%" }} />
      <p className={styles.centered}>{props.txt}</p>
      <a href="" className={styles.absBtn} variant="outline-primary">
        See more
      </a>
    </div>
  );
};

export default ICard;
