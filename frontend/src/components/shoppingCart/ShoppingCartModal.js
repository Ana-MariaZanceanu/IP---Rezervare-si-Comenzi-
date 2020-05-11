import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ShoppingCart from "./ShoppingCart";
import "./ShoppingCart.css";

class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { show, onHide } = this.props;
    const { products } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modalSizes"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={"modalHeader"} />
        <Modal.Body>
          <ShoppingCart products={products} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ShoppingCartModal;
