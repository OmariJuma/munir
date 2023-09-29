import axios from "axios";
import Google from "../../assets/images/icons/icons8-google.svg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Col, Form,  InputGroup, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import UserContext from "../store/user-context";
import { lazy } from "react";
const Footer = lazy(() => import("../UI/Footer"));

const Login = (props) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const google = () => {
    window.open("https://test.muneerautomotive.co.ke/auth/google", "_self");
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (event) => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
  };
  const [signup, setsignup] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      signup.email.trim().length > 6 &&
      signup.email.includes(["@" && "."]) &&
      signup.password.trim().length > 7
    ) {
      axios
        .post("http://localhost:8080/api/users/login", {
          email: signup.email,
          password: signup.password,
        })
        .then((response) => {
          if (response.data.auth) {
            localStorage.setItem("token", response.data.token);
            setUser({
              userName: response.data.details.displayName,
              firstName: response.data.details.firstName,
              email: response.data.details.emails[0],
              phoneNo: response.data.details.phoneNo,
            });
            navigate(`/profile/${response.data.id}`);
          }
          if (response.data.accountExists === false) {
            setError(response.data.message);
          }
        })
        .catch((err) => {
          setError("An error occured, please try again later");
        });
    } else if (!signup.email.includes(["@" || "."])) {
      setError("Please enter a valid email address");
    } else {
      setError("Please fill in all the fields correctly");
    }
  };

  return (
    <>
      <div className="container">
        {/* <h1 style={{ margin: "2rem 0" }}>Login to continue</h1> */}

        <Card className={styles.card}>
          {/* <div className={styles.left}>
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
          </div> */}

          <div className={styles.right}>
            <Col md={12} lg={12} xxl={12}>
              <h1>Login to continue</h1>
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
                {error && (
                  <p
                    style={{
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
          <div className="text-center" style={{ display: "block", marginBottom:"1rem" }}>
            if you dont have an account click here to{" "}
            <Link to="/signup" style={{ color: "blue" }}>
              sign up
            </Link>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Login;
