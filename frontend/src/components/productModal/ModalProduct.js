import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";


export default function ModalProduct(props) {
  const {show,onHide,img,productName,productPrice,productAvailability} = props;
  let availabilityStyle;
  if(productAvailability === "in stock"){
    availabilityStyle = "inStock";
  }else{
    availabilityStyle = "soldOut";
  }
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modalSizes" aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton className={"modalHeader"} />
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={5}>
                  <Image src={img} rounded className={"imageStyle"} />
            </Col>
            <Col xs={12} md={6}>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <h2 className={"nameStyle"}>{productName}</h2>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={5} md={12}>
                  <Card.Text className={"priceStyle"}>{productPrice}</Card.Text>
                </Col>
                <Col xs={5} md={12}>
                  <Card.Text className={availabilityStyle}>{productAvailability}</Card.Text>
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
            <Col xs={12} md={12}>
              <Card.Text className={"descriptionTitleStyle"}>Product Ingredients</Card.Text>
              <ListGroup className={"descriptionTextStyle"}>
                <ListGroup.Item>Ingredient 1</ListGroup.Item>
                <ListGroup.Item>Ingredient 2</ListGroup.Item>
                <ListGroup.Item>Ingredient 3</ListGroup.Item>
                <ListGroup.Item>Ingredient 4</ListGroup.Item>
                <ListGroup.Item>Ingredient 5</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
