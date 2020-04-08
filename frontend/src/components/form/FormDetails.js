import React, { Component } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

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
              type="Name"
              placeholder="Enter your name"
              defaultValue={values.name}
              onChange={handleChange("name")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
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
            <Form.Label>Select date</Form.Label>
            <br />
            <ReactTimePicker>
              defaultValue=values.date onChange={handleChange("dateHour")}
            </ReactTimePicker>
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
