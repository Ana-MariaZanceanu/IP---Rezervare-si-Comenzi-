import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FaCartPlus, FaHeart, FaCheck } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";
import axios from "axios";

class ModalProduct extends Component {
  constructor(props) {
    super(props);
  }

  postProductToCart = async (idProduct) => {
      
    await axios({
      method: "get",
      url: "http://localhost:3000/api/v1/cart/add-product/" + idProduct,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { show, onHide, productAvailability } = this.props;
    const { product } = this.props;
    let availabilityStyle;
    if (productAvailability === "in stock") {
      availabilityStyle = "inStock";
    } else {
      availabilityStyle = "soldOut";
    }
    if (Object.keys(product).length === 0) {
      return <div />;
    }
    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modalSizes"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={"modalHeader"} />
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={5}>
                <Image src={product.image} rounded className={"imageStyle"} />
              </Col>
              <Col xs={12} md={7}>
                <Row className="show-grid">
                  <Col xs={12} md={12}>
                    <h2 className={"nameStyle"}>{product.name}</h2>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={5} md={12}>
                    <Card.Text className={"priceStyle"}>
                      {product.price}$
                    </Card.Text>
                  </Col>
                  <Col xs={5} md={12}>
                    <Card.Text className={availabilityStyle}>
                      {productAvailability}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="show-grid buttons_cart">
                  <Col xs={5} md={5}>
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        this.postProductToCart(product._id);
                      }}
                    >
                      <FaCartPlus /> Add to cart
                    </Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <Button variant="outline-danger">
                      <FaHeart /> Add to wishlist
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="show-grid description">
              <Col xs={12} md={6}>
                <Card.Text className={"descriptionTitleStyle"}>
                  Product Ingredients
                </Card.Text>
                <ListGroup className={"descriptionTextStyle"}>
                  {product.ingredients.map((ingredient) => (
                    <ListGroup.Item>
                      <FaCheck />
                      {ingredient}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <Image
                  src={
                    "https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg"
                  }
                  className={"chefImg"}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalProduct;
