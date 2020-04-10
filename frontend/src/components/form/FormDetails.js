import React, { Component } from 'react';
//import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

/*const ReactCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};*/

class FormDetails extends Component {
  constructor(props) {
    super(props);
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="userFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={values.userFirstName}
              name="userFirstName"
              onChange={handleChange('userFirstName')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="userLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Last name"
                value={values.userLastName}
                name="userLastName"
                onChange={handleChange('userLastName')}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange('email')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="phone"
                placeholder="Phone number"
                value={values.phoneNumber}
                name="phoneNumber"
                onChange={handleChange('phoneNumber')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="numberOfSeats">
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control
                type="number"
                placeholder="Number of seats"
                value={values.numberOfSeats}
                name="numberOfSeats"
                onChange={handleChange('numberOfSeats')}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="reservationDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
                type="date"
                placeholder="Date"
                value={values.reservationDate}
                name="reservationDate"
                onChange={handleChange('reservationDate')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="hour">
            <Form.Label>Hour</Form.Label>
            <Form.Control
                type="text"
                placeholder="Hour"
                value={values.hour}
                name="hour"
                onChange={handleChange('hour')}
            />
          </Form.Group>
        </Form.Row>

        <Button onClick={this.continue} variant="primary" type="button" style={styles.button}>
          Continue
        </Button>
      </Form>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#A71D31',
    color: '#F7E7D9',
    border: 'none',
    marginRight: '1vw',
    marginTop: '2vh',
    width: 'auto',
    height: 'auto',
  },
};

export default FormDetails;
