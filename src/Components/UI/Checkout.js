import { Button, Col, Form, Image, Row } from "react-bootstrap";
import classes from "./Checkout.module.css";
import LipaNaMpesa from "../../assets/images/logos/lipa.png";
import Ceo from "../../assets/images/People/Mr_Mahmoud.jpeg";
import { useState } from "react";
import axios from "axios";
import { lazy } from "react";
const Footer = lazy(() => import("./Footer"));


const Checkout = () => {
  const [amount, setAmount] = useState(1);
  const [phone, setPhone] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/stk", {
        phone: phone,
        amount: amount,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(phone);
  return (
    <>
      <Row>
        {/* Left Section */}
        <Col xs={12} sm={12} md={6} lg={6} className={classes.customCol}>
          <Image src={Ceo} className={classes.left} alt="Mr. Mrefu" />
        </Col>
        {/* Right Section */}
        <Col xs={12} sm={12} md={6} lg={6} className={classes.customCol}>
          <div className={classes.checkoutContent}>
            <h1>Checkout</h1>
            <p>Please complete your purchase by providing payment details</p>
            <Image
              src={LipaNaMpesa}
              className={classes.mpesa}
              alt="Pay using mpesa"
            />
            <Form className={classes.form} onSub>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Enter your mobile number</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" onClick={submitHandler}>
                Pay Ksh 1000
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Checkout;
