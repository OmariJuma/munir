import axios from "axios";
import Google from "../../assets/images/icons/google.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Col, Form, Row, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
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
        email:signup.email,
        password:signup.password
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Choose a Login Method</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div
              className={styles.loginButton && styles.google}
              onClick={google}
            >
              <img src={Google} alt="" className={styles.icon} />
              Google
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.line} />
            <div className={styles.or}>OR</div>
          </div>
          <div className={styles.right}>
            {/* <input
              className={styles.input}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Password"
            /> */}
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
                {/* {!isPasswordValid && (
                  <p className={styles.invalid}>password do not match</p>
                )} */}
              </Form.Group>
            </Col>

            <button className={styles.submit} onClick={submitHandler}>Login</button>
          </div>
        </div>
      </div>
      <div className="text-center">
        if you dont have an account click here to{" "}
        <Link to="/signup">sign up</Link>
      </div>
    </>
  );
};

export default Login;
