import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class ProductImg extends Component {
  render() {
    const { img } = this.props;

    return (
      <div>
        <Container>
          <Col xs={6} md={4}>
            <Image src={img} rounded />
          </Col>
        </Container>
      </div>
    );
  }
}

export default ProductImg;
