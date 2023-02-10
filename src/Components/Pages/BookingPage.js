import styles from "./BookingPage.module.css";
import Booked from "./../../assets/images/animations/booked.mp4";
import Parking from "./../../assets/images/parking.jpg";
import Parking1 from "./../../assets/images/parking1.jpg";
import date from "./../../assets/images/date.png";
import calend from "./../../assets/images/icons/calend.png";
import { Form, Button, Carousel, Col,Row } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
const BookingPage = () => {
  var currentDate=new Date();
  var dd=String(currentDate.getDate()).padStart(2,'0');
  var mm=String(currentDate.getMonth()+1).padStart(2,'0');
  var yyyy=String(currentDate.getFullYear());
currentDate=mm+'/'+dd+'/'+yyyy;
console.log(currentDate);
const onClickHandler=(e)=>{
e.preventDefault()
}
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
          <Form.Control type="text" placeholder="e.g Toyota"/>
        </Form.Group>

          </Col>
          <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text" placeholder="e.g Aauris"/>
        </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control type="text" placeholder="e.g KCA 123A"/>
        </Form.Group>

          </Col>
          <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Pick a date</Form.Label>
          <Form.Control type="date" placeholder="(mm/dd/yy)"
       min={currentDate} />
        </Form.Group>

          </Col>
        </Row>


        <Button variant="primary" type="submit" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
      <h5>If you already have a booking <a>click here</a></h5>
      <h2>Safety of your data <span id={styles.safety}>is our top priority</span></h2>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          
          </Col> 
        <Col xs={12} sm={6} md={6} lg={6}>
          
          </Col> 
      </Row>
      <h2><span id={styles.safety1}>Guaranteed Booking</span> with our qualified technicians</h2>

      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          
          </Col> 
        <Col xs={12} sm={6} md={6} lg={6}>
          
          </Col> 
      </Row>
    </>
  );
};

export default BookingPage;
