import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Input = () => {
  // const [modalShow, setModalShow] = useState(false);
  const [typing, setIsTyping] = useState("");
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setIsTyping(e.target.value);
  };

const submitHandler=async(e)=>{
  e.preventDefault();
  await axios.get(`https://test.muneerautomotive.co.ke/api/products/product/${typing}`).then((res)=>{
    console.log(res.data);
  })
}
useEffect(() => {submitHandler()}, [typing])

  return (
    <form onSubmit={submitHandler}>
      <InputGroup className={`${"mb-3"} ${styles.inpt}`}>
        <Form.Control
          type="search"
          aria-label="Search bar with button addon"
          aria-describedby="basic-addon1"
          placeholder="am looking for..."
          onChange={changeHandler}
        />
        <Button type="submit" bg="primary" id="button-addon1">
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
