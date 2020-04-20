import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
export class PaymentForm extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="cardNumber">
              <Form.Label>Enter card number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                value={values.cardNumber}
                name="cardNumber"
                onChange={handleChange("cardNumber")}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="nameOnCard">
              <Form.Label>Enter name on card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name"
                value={values.nameOnCard}
                name="nameOnCard"
                onChange={handleChange("nameOnCard")}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="expiryDate">
              <Form.Label>Enter expiry date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter expiry date"
                value={values.cardNumber}
                name="expiryDate"
                onChange={handleChange("expiryDate")}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="securityCode">
              <Form.Label>Enter security code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the security code"
                value={values.securityCode}
                name="securityCode"
                onChange={handleChange("securityCode")}
                required
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
    border: "none",
    marginRight: "1vw",
    marginTop: "2vh",
    width: "auto",
    height: "auto",
  },
  input: {
    width: "30%",
  },
  buttonConfirm: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
  },
};

export default PaymentForm;
