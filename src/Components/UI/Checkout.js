import { Button, Col, Form, Image, Row } from "react-bootstrap";
import classes from "./Checkout.module.css";
import LipaNaMpesa from "../../assets/images/logos/lipa.png";
import Ceo from "../../assets/images/People/Mr_Mahmoud.jpeg";
import { useState } from "react";
import axios from "axios";
import { lazy } from "react";
import counties from "../Utilities/counties";
import constituencies from "../Utilities/Constituencies";
const Footer = lazy(() => import("./Footer"));

const Checkout = () => {
  const [amount, setAmount] = useState(1);
  const [phone, setPhone] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    altPhone: "",
    email: "",
    address: "",
    addInfo: "",
    county: {
      countyName: "",
      countyCode: "",
    },
    constituency: "",
  });
  const handleInputChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      [event.target.name]: event.target.value,
    });
  };

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
  console.log(customerInfo.county);
  return (
    <>
      <div className={classes.checkoutContent}>
        <h1>Checkout</h1>
        <p className={classes.disclaimer}>
          : Dear customer, we only support payments via mpesa, If you want to
          make purchase using other payment options please contact us on{" "}
          <a href="tel:+254722174444">+254722174444</a>
          or
          <a href="tel:+254707686784">+254707686784</a>
          for further arrangements. <br />
          We use third-party courier services such naekana, G4s, etc to deliver
          your goods. Hence, you will be required to pick up your order at their
          office.
        </p>
        <Image
          src={LipaNaMpesa}
          className={classes.mpesa}
          alt="Pay using mpesa"
        />
        <h2>Address</h2>
        <Form className={classes.form}>
          <Row>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>Enter First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={customerInfo.firstName}
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
                  value={customerInfo.secondName}
                  required
                  minLength={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  minLength={3}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>Alternative Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Doe"
                  onChange={handleInputChange}
                  name="secondName"
                  value={customerInfo.altPhone}
                  required
                  minLength={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>Area name</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="eg. Lavington West Phase 2"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  minLength={3}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provide any additional information"
                  onChange={handleInputChange}
                  name="addInfo"
                  value={customerInfo.addInfo}
                  minLength={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="countyAndConstituency">
                <Form.Label>Select County</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="county"
                  value={customerInfo.county}
                  onChange={handleInputChange}
                >
                  <option value="">Open this menu</option>
                  {counties.map((county) => (
                    <option key={county.code} value={county.county}>
                      {county.county}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={6} lg={6} xxl={6}>
              <Col md={6} lg={6} xxl={6}>
                <Form.Group className="mb-3" controlId="formBasicInput">
                  <Form.Label>City/ Constituency/ Location</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="constituency" // Set the name attribute to "constituency"
                    value={customerInfo.constituency} // Set the selected value to customerInfo.constituency
                    onChange={handleInputChange} // Handle the change event
                  >
                    <option value="">Open this select menu</option>
                    {constituencies
                      .filter(
                        (constituency) =>
                          constituency["county-code"] ===
                          customerInfo.county.countyCode
                      )
                      .map((constituency) => (
                        <option
                          key={constituency.code}
                          value={constituency.constituency}
                        >
                          {constituency.constituency}
                        </option>
                      ))}
                  </select>{" "}
                </Form.Group>
              </Col>
            </Col>
          </Row>
          <Button type="submit" onClick={submitHandler}>
            Pay Ksh 1000
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
