import { Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from "./profile.module.css";
import axios from "axios";
const Profile = ({ details }) => {
  const logoutHandler = () => {
    window.location.href = "http://localhost:8080/auth/logout";
  }
  return (
    <div className="container-fluid" style={{gap:"2rem"}}>
      <Row>
        <Col md={6} lg={6} xxl={6} className={styles.card}>
          <Card >
            <ListGroup variant="flush">
              <Card.Title>
                <ListGroup.Item>
                  <h5>Personal Details</h5>
                </ListGroup.Item>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  {" "}
                  <img
                    src={details.photos[0].value}
                    className={styles.profilePicture}
                    alt="your profile"
                  />
                  <p>Name: {details.displayName}</p>
                  <p>Email: {details.emails[0].value}</p>
                  <p>Phone Number: </p>
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
      <button type="button" onClick={logoutHandler} className={styles.logoutBtn}>Logout</button>
    </div>
  );
};

export default Profile;
