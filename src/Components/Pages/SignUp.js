import { useState } from "react";
import { Col, Form, Row, InputGroup,Card } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
const SignUp = (props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPassword2Shown, setIsPassword2Shown] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
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
    if(signup.firstName.trim().length>2 && signup.secondName.trim().length>2 && signup.phoneNo.trim().length>9 && signup.email.trim().length>7 && signup.password.trim().length>7 && signup.confirmPassword.trim().length>7){
      if(signup.password === signup.confirmPassword){
        setIsPasswordValid(true);
        console.log(signup);
        axios.post("http://localhost:8080/api/users/register",
        {
            firstName: signup.firstName,
            secondName: signup.secondName,
            phoneNo: signup.phoneNo,
            email: signup.email,
            password: signup.password,
        }).then((response)=>{
            console.log(response.data);
            navigate("/login");
        }).catch((err)=>{
            console.log(err);
        }
            )
      }
        else{
            setIsPasswordValid(false);
            }
    }
    }

  return (
    <div className="container">
      <Form >
        <h1>Sign Up</h1>
        <Card className={styles.card}>
        <Row>
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
        </Row>

        <Row>
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
              { !isPasswordValid &&<p className={styles.invalid}>password do not match</p>} 

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
                  className={`${isPasswordValid ? "" : styles.invalid}`}
                />
                <InputGroup.Text
                  id="basic-addon1"
                  onClick={() => setIsPassword2Shown(!isPassword2Shown)}
                >
                  <span id={`${isPassword2Shown ? styles.strikeThru1 : ""}`}>
                    <FaEye />
                  </span>
                </InputGroup.Text>
              </InputGroup>
              { !isPasswordValid &&<p className={styles.invalid}>password do not match</p>} 

            </Form.Group>
          </Col>
        </Row>
        <button
          className="btn btn-primary"
          style={{ width: "100%" }}
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
        <br />
        <div className="text-center">
        If you have an account click here to <Link to="/login" style={{color:"blue"}}>log in</Link>
      </div>

        </Card>

      </Form>
    </div>
  );
};

export default SignUp;
