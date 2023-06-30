import axios from "axios";
import Google from "../../assets/images/icons/icons8-google.svg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Col, Form, Row, InputGroup, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = (props) => {
  const navigate = useNavigate();
  const google = () => {
    window.open("https://test.muneerautomotive.co.ke/auth/google", "_self");
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true)
  const [accountExists, setAccountExists] = useState(true)
  const handleInputChange = (event) => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
  };
  const [signup, setsignup] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", {
        email: signup.email,
        password: signup.password,
      })
      .then((response) => {
        console.log(response);
        if(response.data.auth===true)
        {
          setIsCorrect(true);
          localStorage.setItem("token", response.data.token);
          props.handleCallback(response.data);
          navigate("/");  
        }
        if(response.data.accountExists===true){
          setIsCorrect(false);
          // console.log("Wrong email or password");
          //show an alert 
        }
        if(response.data.accountExists===false){
          setAccountExists(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 style={{margin:"2rem 0"}}>Choose a Login Method to continue</h1>

      <Card className={styles.card}>
      <div className={styles.left}>
          <button
            className={"btn btn-primary"}
            style={{ width: "100%" }}
            onClick={google}
          >
            <img src={Google} alt="" className={styles.icon} />
            Login with Google account
          </button>
        </div>
        <div className={styles.center}>
          <div className={styles.line} />
          <div className={styles.or}>OR</div>
        </div>

        <div className={styles.right}>
          <Col md={12} lg={12} xxl={12}>
            <h2>Login via email</h2>
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
              {!isCorrect && (
                  <p style={{backgroundColor:"#ffdcdf" , height:"50px", textAlign:"center", paddingTop:"15px", borderColor: isCorrect ? "":"red",color: isCorrect ? "" : "red"}}
                  >Email or password is incorrect, try again</p>
                )}
              {!accountExists && (
                  <p style={{backgroundColor:"#ffdcdf" , height:"50px", textAlign:"center", paddingTop:"15px", borderColor: isCorrect ? "":"red",color: isCorrect ? "" : "red"}}
                  >Sorry, this account does not exist</p>
                )}
            </Form.Group>
          </Col>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
            style={{ width: "100%" }}
          >
            Login
          </button>
        </div>
        <br />
        <div className="text-center" style={{ display: "block" }}>
          if you dont have an account click here to{" "}
          <Link to="/signup" style={{ color: "blue" }}>
            sign up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
