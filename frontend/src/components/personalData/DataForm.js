import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class DataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailUser: "",
      phoneNumberUser: "",
      adress: "",
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container fluid="xl">
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Enter first name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={values.firstName}
                    disabled={this.props.disabled}
                    onChange={handleChange("userFirstName")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Enter last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={values.lastName}
                    disabled={this.props.disabled}
                    onChange={handleChange("userLastName")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Enter phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={values.phoneNumberUser}
                    disabled={this.props.disabled}
                    onChange={handleChange("phoneNumber")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="emailUser">
                  <Form.Label>Enter email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    value={values.emailUser}
                    disabled={this.props.disabled}
                    onChange={handleChange("emailUser")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="adress">
                  <Form.Label>Enter delivery adress</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter delivery adress"
                    value={values.reservationDate}
                    disabled={this.props.disabledAddress}
                    onChange={handleChange("adress")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
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
  buttonConfirm: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
  },
};

export default DataForm;
