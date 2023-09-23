import styles from "./BookingPage.module.css";
// import Booked from "./../../assets/images/animations/booked.mp4";
import Parking from "./../../assets/images/parking.jpg";
// import Parking1 from "./../../assets/images/parking1.jpg";
import Care from "./../../assets/images/animations/customerCare.gif";
import Cyber from "./../../assets/images/animations/cyber.gif";
import date from "./../../assets/images/date.png";
import { Form, Button, Carousel, Col, Row } from "react-bootstrap";
import { FaCheck, FaLock, FaClone, FaAward } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import Testimonials from "../UI/Testimonials";
import MyForm from "../UI/MyForm";
import { lazy} from "react";
const Footer = lazy(() => import("../UI/Footer"))

const BookingPage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={date} alt="parking slot" className={styles.img} />
          <Carousel.Caption style={{ color: "black" }}>
            <h3 style={{ color: "white" }}>
              Schedule a <span style={{ color: "black" }}>Booking Today</span>
            </h3>
            Are you seeking professional advice? Or want to book a service slot?
            Look no further, book a date and time on the form below
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Parking} alt="parking slot" className={styles.img} />

          <Carousel.Caption>
            <h3>Guaranteed Parking slot</h3>
            We provide free parking slots to our clients, come today and
            experience our services{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    
    <MyForm/>
      <h6 style={{textAlign:"center", margin:"3rem 0"}}>
        If you already have a booking <a href="/index" id={styles.link}>click here</a>
      </h6>
      <h2>
        Safety of your data <span id={styles.safety}>is our top priority</span>
      </h2>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <img
            src={Cyber}
            alt="cyber security experts animation"
            className={styles.gifs}
          />
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <ul>
            <li>
              <span>
                <FaLock className={styles.icon} />
                Multi-level security checks{" "}
              </span>
            </li>
            <li>
              <span>
                <FaClone className={styles.icon} />
                Multiple data backups{" "}
              </span>
            </li>
            <li>
              <span>
                <FaLock className={styles.icon} />
                Stringent data privacy policies{" "}
              </span>
            </li>
          </ul>
        </Col>
      </Row>
      <h2>
        <span id={styles.safety1}>Guaranteed Booking</span> with our qualified
        technicians
      </h2>

      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <ul id={styles.ulEven}>
            <li>
              <span>
                <FaAward className={styles.icon} />
                5+ years of automobile experience
              </span>
            </li>
            <li>
              <span>
                <FaCheck className={styles.icon} />
                Proffessional service
              </span>
            </li>
            <li>
              <span>
                <FaAward className={styles.icon} />
                Excellent communication skills{" "}
              </span>
            </li>
            <li>
              <span>
                <FaCheck className={styles.icon} />
                Excellent after sales support{" "}
              </span>
            </li>
            <li>
              <span>
                <MdMoneyOff className={styles.icon} />
                Free Booking{" "}
              </span>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <img
            src={Care}
            alt="cyber security experts animation"
            className={styles.gifs}
          />
        </Col>
      </Row>
      {/* <Carousel>
        <Carousel.Item>
<div className={styles.contCrsl}>
  <img src={Parking1} alt=""/>
  <strong>John Doe</strong>
</div>
</Carousel.Item>
      </Carousel> */}
      <section id="swiping">
        <Testimonials/>
      </section>
      <Footer/>
    </>
  );
};

export default BookingPage;
