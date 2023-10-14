import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Input = (props) => {
  const navigate = useNavigate();
  const ref = useRef();
  const location = useLocation();
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!text || text.trim().length === 0) {
      return;
    }
    if (location.pathname !== `/search/`) {
      navigate(`/search/${text}`);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <InputGroup className={`${"mb-3"} ${styles.inpt}`}>
        <Form.Control
          type="search"
          aria-label="Search bar with button addon"
          aria-describedby="basic-addon1"
          placeholder="I'm looking for..."
          onChange={(e) => setText(e.target.value)}
          ref={ref}
          id={styles.search}
        />
        <Button
          type="submit"
          bg="primary"
          id={styles.searchBtn}
          onClick={props.onClose}
          disabled={!text || text.trim().length === 0}
        >
          <span>
            <FaSearch />
          </span>
        </Button>
      </InputGroup>
    </form>
  );
};

export default Input;
