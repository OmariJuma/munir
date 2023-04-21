import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const SearchModal = (props) => {
  const [show, setShow] = useState(false);

  //implement an event that detects if a use is typing which then removes the popular searches
  const [typing, setIsTyping] = useState(false);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setIsTyping(true);
    setValue(e.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // dialogClassName="modal-90h"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3" onChange={changeHandler}>
          <Form.Control
            placeholder="Am looking for..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button bg="primary" id="button-addon1">
            <span>
              <FaSearch />
            </span>
          </Button>
        </InputGroup>
       {!typing &&<>
        <h4>Popular Searches</h4>
        <Row>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
          <Col xs={4} md={3} lg={3}>
            <a href="">Offset Rims</a>
          </Col>
        </Row>
        </>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  // <>
  {
    /* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal> */
  }
  // </>
};
export default SearchModal;
