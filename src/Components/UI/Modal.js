import { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} onClick={props.onClose}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (<>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
