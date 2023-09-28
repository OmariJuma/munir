// import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import styles from "./Checkout.module.css";
import LipaNaMpesa from "../../assets/images/logos/lipa.png";
import { useContext } from "react";
// import axios from "axios";
import { lazy } from "react";
// import FilterLocation from "./filterLocation";
import CartContext from "../store/cart-context";
import { BsFillClipboardFill } from "react-icons/bs";
import clipboardCopy from "clipboard-copy";
const Footer = lazy(() => import("./Footer"));

const Checkout = () => {
  const {totalAmount} = useContext(CartContext)
  const paybillNo = 222111
  const accountNo = 2046779
  const onPressCopy = (text) => {
    clipboardCopy(text)
    .then(()=>{
      console.log("Copied",text)
    }).catch((error)=>{
      console.log("An error occured", error)
    })

  }
  // const [amount, setAmount] = useState(1);
  // const [customerInfo, setCustomerInfo] = useState({
  //   firstName: "",
  //   secondName: "",
  //   phone: "",
  //   altPhone: "",
  //   email: "",
  //   address: "",
  //   addInfo: "",
  // });
  // const handleInputChange = (event) => {
  //   setCustomerInfo({
  //     ...customerInfo,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (
  //     customerInfo.firstName.trim().length >= 2 &&
  //     customerInfo.secondName.trim().length >= 2 &&
  //     customerInfo.email.trim().includes("@").length !== 0 &&
  //     customerInfo.phone.length === 10 &&
  //     customerInfo.address.trim().length>=5
  //   ) {
  //     axios
  //       .post("http://localhost:8080/mpesa/stk", {
  //         phone: customerInfo.phone,
  //         amount: amount,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   else{
  //     alert("Please fill in all the required fields")
  //   }
  // };
  return (
    <>
      <div className={styles.checkoutContent}>
        <h1>Checkout</h1>
        <p className={styles.disclaimer}>
          : Dear customer, we support payments via mpesa and Cash, If you want
          to make purchase using other payment options please contact us on{" "}
          <a href="tel:+254707686784">+254707686784</a>
          for further arrangements. <br />
          We use third-party courier services such naekana, G4s, etc to deliver
          your goods. Hence, you may be required to pick up your order at their
          office.
        </p>
        <p className={styles.disclaimer}>
          : Dear customer, we are in the process of acquiring safaricom stk
          push-to-pay service. We advise to first call us on{" "}
          <a href="tel:+254707686784">+254707686784</a>
          so that we can start to process your order and only then should you
          pay the required amount.
        </p>
        <div className={styles.paybillContainer}>
          <Image
            src={LipaNaMpesa}
            className={styles.mpesa}
            alt="Pay using mpesa"
          />
          <strong>Payment Procedure</strong>
          <ul>
            <li>Go to <span>Mpesa app or Mpesa toolkit</span></li>
            <li>Select <span>"Lipa n Mpesa"</span></li>
            <li>Select <span>"Paybill"</span></li>
            <li>Enter Business Number <span onClick={()=>onPressCopy(paybillNo)}>222111 <BsFillClipboardFill/> </span></li>
            <li>Enter Account Number <span onClick={()=>onPressCopy(accountNo)}>2046779 <BsFillClipboardFill/> </span></li>
            <li>Enter the amount, yours is <span onClick={()=>onPressCopy(totalAmount)}>{totalAmount} <BsFillClipboardFill/> </span></li>
            <li>Enter Your <span>Mpesa Pin</span></li>
            <li>Press <span>Send</span></li>
            <li>Follow up on the payment and delivery details</li>
          </ul>
        </div>
        {/* <h2>Address</h2>
        <Form className={styles.form} onSubmit={submitHandler}>
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
                  type="number"
                  name="phone"
                  placeholder="07xxxxxxxx"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  minLength={10}
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
          <FilterLocation />
          <Button type="submit">Pay Ksh {totalAmount}</Button>
        </Form> */}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
