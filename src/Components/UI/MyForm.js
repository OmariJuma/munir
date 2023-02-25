import { Form,Row,Col,Button } from "react-bootstrap";
import styles from "./MyForm.module.css";
import calend from "./../../assets/images/icons/calend.png";

const MyForm = (props) => {
    var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, "0");
    var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    var yyyy = String(currentDate.getFullYear());
    currentDate = mm + "/" + dd + "/" + yyyy;
    console.log(currentDate);
    const onClickHandler = (e) => {
      e.preventDefault();
    };
  
    return (<Form className={styles.frmBooking} role="form">
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

        <Button variant="primary" id={styles.btn} type="submit" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
  );
}
 
export default MyForm;
