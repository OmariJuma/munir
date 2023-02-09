import styles from "./BookingPage.module.css";
import Booked from "./../../assets/images/animations/booked.mp4";
import calend from "./../../assets/images/icons/calend.png";
import { Form,Button } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
const BookingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleHolder}>
        <span>
          <img src={calend} alt="A calender icon"/>
        </span>
        <h1>Schedule An Appointment</h1>
      </div>

      <video src={Booked} autoPlay loop muted id={styles.bookanime}></video>
      <p id={styles.p}>Are you seeking professional advice? Or want to book a service slot? Look no further, book a date and time </p>
      <p id={styles.p1}>Are you seeking professional advice? Or want to book a service slot? Look no further, book a date and time </p>
      <Form>
        <h3>Schedule A Booking</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </div>
  );
};

export default BookingPage;
