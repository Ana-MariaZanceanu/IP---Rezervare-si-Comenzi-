import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              defaultValue={values.name}
              onChange={handleChange('name')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPeople">
            <Form.Label>Number of people</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter phone no."
              defaultValue={values.phone}
              onChange={handleChange('phone')}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGrid">
            <Form.Label>Date</Form.Label>
            <br />
            <DatePicker />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                placeholder="Enter phone no."
                defaultValue={values.phone}
                onChange={handleChange('phone')}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Enter your email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                defaultValue={values.email}
                onChange={handleChange('email')}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Button onClick={this.continue} variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    );
  }
}

export default FormDetails;
