import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../../App.css";


export default function ModalProduct(props) {
  const {show,onHide,img,productName,productPrice,productAvailability} = props;
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modalSizes" aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton style={styles.modalHeader} />
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={5}>
                  <Image src={img} rounded style={styles.imageStyle} />
            </Col>
            <Col xs={12} md={6}>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <h2 style={styles.nameStyle}>{productName}</h2>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={5} md={12}>
                  <Card.Text>{productPrice}</Card.Text>
                </Col>
                <Col xs={5} md={12}>
                  <Card.Text>{productAvailability}</Card.Text>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={5} md={6}>
                  <Card.Text>add to cart</Card.Text>
                </Col>
                <Col xs={5} md={6}>
                  <Card.Text>add to wishlist</Card.Text>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={12}>
              <Card.Text>descriere</Card.Text>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const styles = {
  modalHeader: {
    border: "none",
  },
  nameStyle: {
    fontFamily: "Pacifico",
    fontSize: "2rem",
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
};
