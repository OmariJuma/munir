import { Row, Col, Card,ListGroup } from "react-bootstrap";
const Profile = ({details}) => {
  return (
    <div className="container-fluid">
      <h1>You are logged in</h1>
      <Row>
        <Col md={6} lg={6} xxl={6}>
          <Card>
            <ListGroup variant="flush">
            <Card.Title>
                <ListGroup.Item>
              <h5>Personal Details</h5>
              </ListGroup.Item>
            </Card.Title>
            <Card.Body>
              <Card.Text>
                <p>Name: {details.displayName}</p>
                <p>Email: </p>
                <p>Phone Number: </p>
              </Card.Text>
            </Card.Body>
            </ListGroup>
          </Card>
        </Col>
        <Col md={6} lg={6} xxl={6}>
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
    </div>
  );
};

export default Profile;
