import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

export class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitMessage: "",
      nameOnCard: "",
      error: false,
    };
  }
  handleClick = async (e) => {
    e.preventDefault();
    const { stripe, elements, modifyTokenID } = this.props;

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardCvcElement);
    const { error, token } = await stripe.createToken(cardElement);
    if (error) {
      console.log(error);
      this.setState({ submitMessage: error.message });
      this.setState({ error: true });
    } else {
      this.setState({
        submitMessage: "Your card info are valid! You can submit your form!",
      });
      this.setState({ error: false });
      modifyTokenID(token.id);
    }
  };
  render() {
    return (
      <>
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Enter name on card</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.nameOnCard}
                    onChange={(e) =>
                      this.setState({ nameOnCard: e.target.value })
                    }
                    placeholder="Enter name on card"
                    name="nameOnCard"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Label>Enter card number*</Form.Label>
                  <div style={cardComponentStyle}>
                    <CardNumberElement options={cardElementStyle} />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Enter card expiry date*</Form.Label>
                  <div style={cardComponentStyle}>
                    <CardExpiryElement options={cardElementStyle} />
                  </div>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Label>Enter card expiry date*</Form.Label>
                  <div style={cardComponentStyle}>
                    <CardCvcElement options={cardElementStyle} />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card.Text style={this.state.error ? errorStyle : succesStyle}>
            {this.state.submitMessage}
          </Card.Text>
          <Button style={buttonStyle} onClick={this.handleClick}>
            Confirm
          </Button>
        </Container>
      </>
    );
  }
}

const cardComponentStyle = {
  border: "1px solid #ced4da",
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
};

const errorStyle = {
  color: "#FF0000",
};
const succesStyle = {
  color: "#008000",
};

const buttonStyle = {
  backgroundColor: "#A71D31",
  color: "#F7E7D9",
};

const cardElementStyle = {
  style: {
    base: {
      fontSize: "1.1rem",
      fontWeight: "400",
      fontFamily: "Segoe UI",
      lineHeight: "1.5",
    },
    invalid: {
      color: "#FF0000",
    },
  },
};

export default PaymentForm;
