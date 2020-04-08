import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class FormDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter first name"
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter last name"
              defaultValue={values.lastName}
              onChange={handleChange("lastName")}
            />
          </Form.Group>
        </Form.Row>

        <Button onClick={this.continue} variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    );
  }
}

export default FormDetails;
