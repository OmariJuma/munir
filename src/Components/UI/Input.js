import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Caard from "../Caard";
import { Link } from "react-router-dom";
const Input = (props) => {
  const navigate = useNavigate();
  const ref = useRef();
  var key = "";
  const [searchResults, setSearchResults] = useState([]);
  var data={
    id: "1",
    price: "1",
    title: "1",
    description: "1",
    offer: "",
    image: "",  
    brand: "",
    material: "",
    units: "",
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    key = ref.current.value;
    await axios
      .get(`https://test.muneerautomotive.co.ke/api/products/product/${key}`)
      .then((res) => {
        // console.log(res.data);
        setSearchResults(res.data);
        data=res.data
        navigate(`/search/${key}`, { state: data });

        console.log(data);
          

      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(
    (e) => {
      submitHandler();
    },
    [key]
  );

  return (
    <form onSubmit={submitHandler}>
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
