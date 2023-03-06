import { FaCalendarAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import wl from "./../../assets/images/goodyear1.jpeg";
import styles from "./Minicard.module.css";

const MiniCard = () => {
  return (
    <div className={styles.miniCardContainer}>
      <div className={styles.mini}>
        <Link to="/products">
          <img src={wl} alt="wheel" />
          <p className={styles.p}>BuyTires and Rims</p>
        </Link>
      </div>
      <div className={styles.mini}>
        <Link to="/booking">
          <span>
            <FaCalendarAlt className={styles.ic} />
            <p className={styles.p2}>Book an appointment</p>
          </span>
        </Link>
      </div>
      <div className={styles.mini}>
        <span>
          <a href="tel:+254707686784">
            <FaPhone className={styles.ic1} />
            <p className={styles.p3}>Call us</p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default MiniCard;
