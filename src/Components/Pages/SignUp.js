import { useState } from "react";
import { Col, Form, Row, InputGroup, Card } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import Google from "../../assets/images/icons/icons8-google.svg";
import { lazy } from "react";
const Footer = lazy(() => import("../UI/Footer"));

const SignUp = (props) => {
  const google = () => {
    window.open("https://test.muneerautomotive.co.ke/auth/google", "_self");
  };
  const [error, setError] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPassword2Shown, setIsPassword2Shown] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [signup, setsignup] = useState({
    firstName: "",
    secondName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      signup.firstName.trim().length > 2 &&
      signup.secondName.trim().length > 2 &&
      signup.phoneNo.trim().length > 9 &&
      signup.email.trim().length > 7 &&
      signup.password.trim().length > 7 &&
      signup.confirmPassword.trim().length > 7 &&
      isChecked === true
    ) {
      if (signup.password === signup.confirmPassword) {
        setIsPasswordValid(true);
        setError(null);
        axios
          .post("http://localhost:8080/api/users/register", {
            userName: signup.firstName,
            secondName: signup.secondName,
            phoneNo: signup.phoneNo,
            email: signup.email,
            password: signup.password,
            consent: isChecked,
          })
          .then((response) => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (
      signup.firstName.trim().length < 2 &&
      signup.secondName.trim().length < 2 &&
      signup.phoneNo.trim().length < 9 &&
      signup.email.trim().length < 7 &&
      signup.password.trim().length < 7 &&
      signup.confirmPassword.trim().length < 7 &&
      isChecked === false
    ) {
      setError("Please fill in all the fields correctly");
    } else if (!signup.email.includes(["@" || "."])) {
      setError("Please enter a valid email address");
    } else if (isChecked === false) {
      setError(
        "You have neither agreed to our terms and conditions nor our privacy policy"
      );
    }
  };

  return (
    <>
      <div className="container">
        {/* <h1 style={{ margin: "2rem 0" }}>Sign Up To Continue</h1> */}

        <Card className={styles.card + " " + styles.left}>
          <Row>
            {/* <div className={styles.left}>
              <button
                className={"btn btn-primary"}
                style={{ width: "100%" }}
                onClick={google}
              >
                <img src={Google} alt="" className={styles.icon} />
                Signup with Google account
              </button>
            </div>
            <div className={styles.center}>
              <div className={styles.line} />
              <div className={styles.or}>OR</div>
            </div> */}

            <Form style={{ marginTop: "3rem" }} className={styles.right}>
              <h1>Create an Account To Continue</h1>

              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>Enter First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={signup.firstName}
                    onChange={handleInputChange}
                    minLength={3}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="secondName">
                  <Form.Label>Enter Second Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Doe"
                    onChange={handleInputChange}
                    name="secondName"
                    value={signup.secondName}
                    required
                    minLength={3}
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="phoneNo">
                  <Form.Label>Enter Your phone number</Form.Label>
                  <Form.Control
                    type="number"
                    name="phoneNo"
                    placeholder="0712345678"
                    onChange={handleInputChange}
                    value={signup.phoneNo}
                    minLength={9}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Enter Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    value={signup.email}
                    minLength={7}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Enter Your Password</Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type={`${isPasswordShown ? "text" : "password"}`}
                      name="password"
                      value={signup.password}
                      minLength={7}
                      required
                      onChange={handleInputChange}
                      className={`${isPasswordValid ? "" : styles.invalid}`}
                      placeholder="type a strong password"
                    />
                    <InputGroup.Text
                      id="basic-addon2"
                      onClick={() => setIsPasswordShown(!isPasswordShown)}
                    >
                      <span id={`${isPasswordShown ? styles.strikeThru : ""}`}>
                        <FaEye />
                      </span>
                    </InputGroup.Text>
                  </InputGroup>
                  {!isPasswordValid && (
                    <p className={styles.invalid}>password do not match</p>
                  )}
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group className="mb-3" controlId="confirmPasword">
                  <Form.Label>Confirm Your Password</Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Control
                      type={`${isPassword2Shown ? "text" : "password"}`}
                      name="confirmPassword"
                      value={signup.confirmPassword}
                      minLength={7}
                      required
                      onChange={handleInputChange}
                      placeholder="Repeat the password"
                      className={`${isPasswordValid ? "" : styles.invalid}`}
                    />
                    <InputGroup.Text
                      id="basic-addon1"
                      onClick={() => setIsPassword2Shown(!isPassword2Shown)}
                    >
                      <span
                        id={`${isPassword2Shown ? styles.strikeThru1 : ""}`}
                      >
                        <FaEye />
                      </span>
                    </InputGroup.Text>
                  </InputGroup>
                  {!isPasswordValid && (
                    <p className={styles.invalid}>password do not match</p>
                  )}
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xxl={12}>
                <Form.Group
                  className="mb-3"
                  controlId="confirmPassword"
                  id={styles.checkbox}
                >
                  <InputGroup.Checkbox
                    checked={isChecked} // Use the 'checked' attribute to manage the checkbox state
                    onChange={(e) => setIsChecked(e.target.checked)} // Update 'isChecked' state
                    required
                  />
                  <Form.Label>
                    Click to agree to our{" "}
                    <Link to="/termsAndConditions" className={styles.link}>
                      Terms and Conditions
                    </Link>{" "}
                    and
                    <Link to="/privacyPolicy" className={styles.link}>
                      {" "}
                      Privacy Policy
                    </Link>
                  </Form.Label>
                </Form.Group>
              </Col>
              {error && (
                <p
                  style={{
                    width: "100%",
                    backgroundColor: "#ffdcdf",
                    height: "50px",
                    textAlign: "center",
                    paddingTop: "15px",
                    borderColor: "red",
                    color: "red",
                  }}
                >
                  {error}
                </p>
              )}
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </button>
            </Form>

            <br />
            <div className="text-center">
              If you have an account click here to{" "}
              <Link to="/login" style={{ color: "blue" }}>
                log in
              </Link>
            </div>
          </Row>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
