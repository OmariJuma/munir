import styles from "./Icard.module.css";
import rt from "./../../assets/images/wheel3.jpeg";
import { Button } from "react-bootstrap";

const ICard = (props) => {
  return (
    <div className={styles.container1}>
      <img src={rt} alt="" style={{ width: "100%" }} />
      <p className={styles.centered}>{props.txt}</p>
      <a href="" className={styles.absBtn} variant="outline-primary">
        See more
      </a>
    </div>
  );
};

export default ICard;
