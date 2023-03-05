import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "./MyForm.module.css";
import calend from "./../../assets/images/icons/calend.png";
import { useState } from "react";

const MyForm = (props) => {
  const [bookingInfo, setBookingInfo] = useState({
    firstName: "",
    secondName: "",
    phoneNo: "",
    email: "",
    regNo: "",
    make: "",
    model: "",
    date: currentDate,
  });
  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = String(currentDate.getFullYear());
  currentDate = mm + "/" + dd + "/" + yyyy;
  console.log(currentDate);

  const handleInputChange = (event) => {
    setBookingInfo({ ...bookingInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      bookingInfo.firstName.trim().length >= 2 ||
      bookingInfo.secondName.trim().length >= 2 ||
      bookingInfo.email.trim().includes("@") ||
      bookingInfo.regNo.trim().length >3||
      bookingInfo.make.trim().length > 3 ||
      bookingInfo.model.trim().length >3 ||
      bookingInfo.date >= currentDate
    ) {
      console.log("booking success", bookingInfo);
      setBookingInfo({
        firstName: "",
        secondName: "",
        phoneNo: "",
        email: "",
        regNo: "",
        make: "",
        model: "",
        date: currentDate,
      });
    } else { return alert("an error has occured");
    }
  };
  return (
    <Form className={styles.frmBooking} role="form" onSubmit={handleSubmit}>
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
            <Form.Control
              type="text"
              name="firstName"
              placeholder="John"
              value={bookingInfo.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Enter Second Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Doe"
              onChange={handleInputChange}
              name="secondName"
              value={bookingInfo.secondName}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Enter Your phone number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNo"
              placeholder="0712345678"
              onChange={handleInputChange}
              value={bookingInfo.phoneNo}
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={bookingInfo.email}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Vehicle Make</Form.Label>
            <Form.Control
              type="text"
              name="make"
              placeholder="e.g Toyota"
              onChange={handleInputChange}
              value={bookingInfo.make}
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Vehicle Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              placeholder="e.g Aauris"
              onChange={handleInputChange}
              value={bookingInfo.model}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type="text"
              name="regNo"
              placeholder="e.g KCA 123A"
              onChange={handleInputChange}
              value={bookingInfo.regNo}
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Pick a date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="(mm/dd/yy)"
              min={currentDate}
              onChange={handleInputChange}
              value={bookingInfo.date}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" id={styles.btn} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
