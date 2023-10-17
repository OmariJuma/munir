import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "./MyForm.module.css";
import calend from "./../../assets/images/icons/calend.png";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const MyForm = (props) => {
  const form = useRef();
  const [bookingInfo, setBookingInfo] = useState({
    firstName: "",
    secondName: "",
    phoneNo: "",
    email: "",
    regNo: "",
    make: "",
    model: "",
    date: "",
    time: "",
  });
  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = String(currentDate.getFullYear());
  currentDate = yyyy + "-" + mm + "-" + dd;

  const handleInputChange = (event) => {
    setBookingInfo({ ...bookingInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    if (
      bookingInfo.firstName.trim().length >= 2 &&
      bookingInfo.secondName.trim().length >= 2 &&
      bookingInfo.email.trim().includes("@").length !== 0 &&
      bookingInfo.regNo.trim().length > 3 &&
      bookingInfo.make.trim().length > 3 &&
      bookingInfo.model.trim().length > 3 &&
      bookingInfo.date >= currentDate &&
      bookingInfo.time !== 0
    ) {
        await axios
          .post("https://test.muneerautomotive.co.ke/api/booking", bookingInfo)
          .then((res) => {
            toast(res.data)
          })
          .catch((error) =>{
        toast(error.message)
      })
      emailjs
        .sendForm(
          "service_r5gm9q1",
          "template_5dq8ibe",
          form.current,
          "YUE9-soFT-BCwlqAu"
        )
        .then((response) => {
          toast("SUCCESS! You have sent the booking request");
          setBookingInfo({
            firstName: "",
            secondName: "",
            phoneNo: "",
            email: "",
            regNo: "",
            make: "",
            model: "",
            date: "",
            time: "",
          });
        })
        .catch((err) => {
          toast("Please try again an error has occurred");
        });
    } else {
      return toast("Please try again an error has occurred");
    }
  };
  return (
    <Form
      ref={form}
      className={styles.frmBooking}
      role="form"
      onSubmit={handleSubmit}
    >
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
              minLength={3}
              required
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
              required
              minLength={3}
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
              minLength={9}
              required
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
              minLength={7}
              required
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
              required
              minLength={3}
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
              required
              minLength={3}
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
              required
              minLength={5}
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
              required
              value={bookingInfo.date}
            />
          </Form.Group>
        </Col>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Pick time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            min={"08:00"}
            max={"16:00"}
            onChange={handleInputChange}
            required
            value={bookingInfo.time}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" id={styles.btn} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
