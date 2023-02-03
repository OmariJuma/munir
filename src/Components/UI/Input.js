import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <>
      <InputGroup className={`${"mb-3"} ${styles.inpt}`}>
        <FormControl
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
    </>
  );
};

export default Input;
