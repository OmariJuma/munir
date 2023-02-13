import styles from "./BookingPage.module.css";
import Booked from "./../../assets/images/animations/booked.mp4";
import Parking from "./../../assets/images/parking.jpg";
import Parking1 from "./../../assets/images/parking1.jpg";
import Care from "./../../assets/images/animations/customerCare.gif";
import Cyber from "./../../assets/images/animations/cyber.gif";
import date from "./../../assets/images/date.png";
import calend from "./../../assets/images/icons/calend.png";
import { Form, Button, Carousel, Col, Row } from "react-bootstrap";
import { FaCheck, FaLock, FaClone, FaAward } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { Card } from "react-bootstrap";
//
import saf from "./../../assets/images/logos/saf.webp";
import a8 from "./../../assets/images/before and after/a8.jpeg";
import a7 from "./../../assets/images/before and after/a7.jpeg";
import a6 from "./../../assets/images/before and after/a6.jpeg";
import a5 from "./../../assets/images/before and after/a5.jpeg";
import a4 from "./../../assets/images/before and after/a4.jpeg";
import a3 from "./../../assets/images/before and after/a3.jpeg";
import a2 from "./../../assets/images/before and after/a2.jpeg";
import a1 from "./../../assets/images/before and after/a1.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BookingPage = () => {
  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = String(currentDate.getFullYear());
  currentDate = mm + "/" + dd + "/" + yyyy;
  console.log(currentDate);
  const onClickHandler = (e) => {
    e.preventDefault();
  };
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

      {/* </div> */}
      <Form className={styles.frmBooking} role="form">
        <div className={styles.titleHolder}>
          <span>
            <img src={calend} alt="A calender icon" />
          </span>
          <h1>Schedule An Appointment</h1>
        </div>
        <Row>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Enter First name</Form.Label>
              <Form.Control type="text" placeholder="John" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Enter Second Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Enter Your phone number</Form.Label>
              <Form.Control type="number" placeholder="0712345678" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control type="text" placeholder="e.g Toyota" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Control type="text" placeholder="e.g Aauris" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control type="text" placeholder="e.g KCA 123A" />
            </Form.Group>
          </Col>
          <Col md={6} lg={6} xxl={6}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Pick a date</Form.Label>
              <Form.Control
                type="date"
                placeholder="(mm/dd/yy)"
                min={currentDate}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
      <h6>
        If you already have a booking <a>click here</a>
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
          <ul>
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
        <header>Our Happy Clients</header>

        <Swiper
        style={{padding:"0 10px"}}
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={2}
          grabCursor={true}
          // autoplay={{
          //   delay: 20000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a1} alt=" " />
              <Card.Body>
                <Card.Title>Ms. Beatrice</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                  I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a2} alt=" " />
              <Card.Body>
                <Card.Title>Mr. Alex</Card.Title>
                <p>Bf Goodrich 255/15/16</p>

                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a3} alt=" " />
              <Card.Body>
                <Card.Title>Mr John</Card.Title>
                <p>Bf Goodrich 255/15/16</p>

                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a4} alt=" " />
              <Card.Body>
                <Card.Title>Mrs. Loice</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a5} alt=" " />
              <Card.Body>
                <Card.Title>Mr. Mohammed</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a6} alt=" " />
              <Card.Body>
                <Card.Title>Mrs. Holga</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a7} alt=" " />
              <Card.Body>
                <Card.Title>Mr. Jibril</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Card>
              <img src={a8} alt=" " />
              <Card.Body>
                <Card.Title>Ms. Virginia</Card.Title>
                <p>Bf Goodrich 255/15/16</p>
                <Card.Text>
                I am happy to have shopped with Muneer he provides good
                  services plus amazing discounts{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default BookingPage;
