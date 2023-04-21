import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
import SearchModal from "./SearchModal";
import { useState } from "react";

const Input = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <InputGroup className={`${"mb-3"} ${styles.inpt}`} onMouseDown={()=>setModalShow(true)}
>
        <Form.Control
          type="text"
          aria-label="Search bar with button addon"
          aria-describedby="basic-addon1"
          placeholder="am looking for..."
        />
        <Button bg="primary" id="button-addon1">
          <span>
            <FaSearch />
          </span>
        </Button>
      </InputGroup>
     <SearchModal show={modalShow}
        onHide={() => setModalShow(false)}/>
    
    </>
  );
};

export default Input;
