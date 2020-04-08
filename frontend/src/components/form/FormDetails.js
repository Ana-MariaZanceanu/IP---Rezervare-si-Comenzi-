import React, { Component } from "react";
//import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

/*const ReactCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};*/

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
              onChange={handleChange("name")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPeople">
            <Form.Label>Number of people</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter phone no."
              defaultValue={values.phone}
              onChange={handleChange("phone")}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              defaultValue={values.date}
              onChange={handleChange("date")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHour">
            <Form.Label>Enter hour. 10:00</Form.Label>
            <Form.Control
              type="text"
              defaultValue={values.hour}
              onChange={handleChange("hour")}
            />
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
                onChange={handleChange("phone")}
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
                onChange={handleChange("email")}
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
