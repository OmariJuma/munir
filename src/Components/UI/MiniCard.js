import { FaCalendarAlt,FaPhone } from "react-icons/fa";
import wl from "./../../assets/images/goodyear1.jpeg";
import styles from "./Minicard.module.css";
const MiniCard = () => {
  return (
    <>
      <div className={styles.mini}>
        <img src={wl} alt="wheel" />
        <p className={styles.p}>BuyTires and Rims</p>
      </div>
      <div className={styles.mini}>
        <span>
          <FaCalendarAlt className={styles.ic}/>
          <p className={styles.p2}>Book an appointment</p>

        </span>
      </div>
      <div className={styles.mini}>
        <span>
          <FaPhone className={styles.ic1} href='google'/>
          <p className={styles.p3}>Call us</p>

        </span>
      </div>

    </>
  );
};

export default MiniCard;
