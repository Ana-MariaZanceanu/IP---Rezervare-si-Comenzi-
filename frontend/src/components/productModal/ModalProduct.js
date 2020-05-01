import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaCartPlus,FaHeart, FaCheck } from 'react-icons/fa';
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
            <Col xs={12} md={7}>
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
              <Row className="show-grid buttons_cart">
                <Col xs={5} md={5}>
                  <Button variant="outline-success">
                    <FaCartPlus /> Add to cart
                  </Button>
                </Col>
                <Col xs={6} md={6}>
                  <Button variant="outline-danger">
                    <FaHeart/> Add to wishlist
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Card.Text className={"descriptionTitleStyle"}>Product Ingredients</Card.Text>
              <ListGroup className={"descriptionTextStyle"}>
                <ListGroup.Item><FaCheck/>Ingredient 1</ListGroup.Item>
                <ListGroup.Item><FaCheck/>Ingredient 2</ListGroup.Item>
                <ListGroup.Item><FaCheck/>Ingredient 3</ListGroup.Item>
                <ListGroup.Item><FaCheck/>Ingredient 4</ListGroup.Item>
                <ListGroup.Item><FaCheck/>Ingredient 5</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}