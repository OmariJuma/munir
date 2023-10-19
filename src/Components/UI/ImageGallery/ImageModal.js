import { Button, Modal } from "react-bootstrap";
import styles from  "./ImageModal.module.css"; // Import a custom CSS file

const ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.customModal} // Apply a custom class to the modal
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}> {/* Apply a custom class to the modal body */}
        <img src={props.image} alt="modal" className={styles.customImage} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ImageModal;
