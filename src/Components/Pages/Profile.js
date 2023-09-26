import { Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from "./profile.module.css";
import { TbDoorEnter } from "react-icons/tb";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import Footer from "../UI/Footer";
const Profile = ({ details }) => {
  const {  setUser } = useContext(CartContext);
  // const logoutHandler = () => {
  //   window.location.href = "https://test.muneerautomotive.co.ke/auth/logout";
  // };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser({
      userName: null,
      firstName: null,
      phoneNo: null,
      email: null,
    });
    window.location.reload();
  };
  return (
    <>
   <div className="container-fluid" style={{ gap: "2rem" }}>
        <Row>
          <Col md={6} lg={6} xxl={6} className={styles.card}>
            <Card>
              <ListGroup variant="flush">
                <Card.Title>
                  <ListGroup.Item>
                    <h5>Personal Details</h5>
                  </ListGroup.Item>
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    {/* <img
                    src={details.photos[0].value}
                    className={styles.profilePicture}
                    alt="your profile"
                  /> */}
                    <p>
                      Name:{" "}
                      {/* {details.displayName !== undefined && details.userName}
                      {details.details !== undefined &&
                        details.details.displayName} */}
                      {details.userName && details.userName}
                    </p>
                    <p>
                      Email:{" "}
                      {details.emails !== undefined && details.emails[0].value}
                      {details.details !== undefined &&
                        details.details.emails[0].value}
                      {details.email.value && details.email.value}
                    </p>
                    <p>
                      Phone Number:{" "}
                      {details.phoneNo !== undefined && details.phoneNo}
                    </p>
                  </Card.Text>
                </Card.Body>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6} lg={6} xxl={6} className={styles.card}>
            <Card>
              <ListGroup variant="flush">
                <Card.Title>
                  <ListGroup.Item>
                    <h5>Messages</h5>
                  </ListGroup.Item>
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    <p>You have no messages yet</p>{" "}
                  </Card.Text>
                </Card.Body>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <button
          type="button"
          onClick={logoutHandler}
          className={styles.logoutBtn}
        >
          <span>
            <TbDoorEnter />
          </span>
          Logout
        </button>
        
      </div>
      <Footer />
    </>
  );
};

export default Profile;
