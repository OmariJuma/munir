import styles from "./BookingPage.module.css";
import Booked from "./../../assets/images/animations/booked.mp4";
import calend from "./../../assets/images/icons/calend.png";
import { Row, Col } from "react-bootstrap";
const BookingPage = () => {
  return (<div className={styles.container}>
      <div className={styles.titleHolder}>
          <span>
            <img src={calend} />
          </span>
          <h1>Schedule An Appointment</h1>
        </div>{" "}

        <video src={Booked} autoPlay loop muted id={styles.bookanime}></video>
        </div>
  );
};

export default BookingPage;
