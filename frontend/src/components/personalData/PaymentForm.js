import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
export class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.continue(event);
    } else {
      this.validated(true);
    }
  };

  handleClick = (e) => {
    this.setState({ validated: true });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container fluid="xl">
          <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Row>
              <Col md>
                <Form.Group controlId="cardNumber">
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
              </Col>
              <Col md>
                <Form.Group controlId="nameOnCard">
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
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Enter expiry month</Form.Label>
                  <Form.Control as="select" value="Choose month">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>Octomber</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Enter expiry year</Form.Label>
                  <Form.Control as="select" value="Choose year">
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="securityCode">
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
              </Col>
            </Row>
            <Button
              onClick={this.handleClick}
              variant="primary"
              type="submit"
              style={styles.buttonConfirm}
            >
              Confirm
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

const styles = {
  buttonConfirm: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
  },
};

export default PaymentForm;
