import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import Caard from "../Caard";
import { Link } from "react-router-dom";
const Input = (props) => {
  const navigate = useNavigate();
  const ref = useRef();
  const location = useLocation();

  const submitHandler = async(event) => {
    event.preventDefault();
    const searchQuery = ref.current.value;
    const encodedQuery = encodeURIComponent(searchQuery);
    if(location.pathname !== `/search/`){
      navigate(`/search/${encodedQuery}`)
    }
  };
  
  useEffect(() => {
    submitHandler();
  }, [submitHandler]);
  
  return (<form onSubmit={submitHandler}>
      <InputGroup className={`${"mb-3"} ${styles.inpt}`}>
        <Form.Control
          type="search"
          aria-label="Search bar with button addon"
          aria-describedby="basic-addon1"
          placeholder="am looking for..."
          // onChange={changeHandler}
          ref={ref}
        />
        <Button type="submit" bg="primary" id="button-addon1"
        onClick={props.onClose}
        >
          <span>
            <FaSearch />
          </span>
        </Button>
      </InputGroup>
      {/* <SearchModal show={modalShow}
        onHide={() => setModalShow(false)}/> */}

    </form>
  );
};

export default Input;
