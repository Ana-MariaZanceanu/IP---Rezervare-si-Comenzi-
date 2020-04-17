import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class DataForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              style={styles.input}
              disabled={this.props.disabled}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              style={styles.input}
              disabled={this.props.disabled}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={styles.input}
              disabled={this.props.disabled}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              style={styles.input}
              disabled={this.props.disabled}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={styles.buttonConfirm}>
            Confirm
          </Button>
        </Form>
      </>
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
  input: {
    width: '30%',
  },
  buttonConfirm: {
    backgroundColor: '#A71D31',
    color: '#F7E7D9',
  },
};

export default DataForm;
