import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormReservation from './form/FormReservation';

export class ModalForm extends Component {
  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Book a table </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormReservation />
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}

export default ModalForm;
