import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FormReservation from "./form/FormReservation";
import Button from "react-bootstrap/Button";

export default function FormDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={styles.button}>
        Book a table
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Book a table </Modal.Title>
          </Modal.Header>

          <FormReservation />

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

const styles = {
  button: {
    backgroundColor: " rgb(64, 177, 203);",
    width: "30%",
    color: "black",
    padding: "14px 10px",
    alignSelf: "center",
    textAlign: "center",
    marginLeft: "500px",
    marginTop: "200px",
  },
};
