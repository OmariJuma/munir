import styles from "./ButtonCustom.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ButtonCustom = (props) => {
  const variant = props.variant;
  return (
    <>
      {!variant && (
        <button
          style={{ color: "red", border: "2px solid red" }}
          id={styles.btn}
        >
          {props.text}
        </button>
      )}
      {variant && <button id={styles.btn}>{props.text}</button>}
    </>
  );
};

export default ButtonCustom;
