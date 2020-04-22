import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class DataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailUser: '',
      phoneNumberUser: '',
      adress: '',
    };
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container fluid="xl">
          <Form>
            <Row>
              <Form.Group controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={values.firstName}
                  disabled={this.props.disabled}
                  onChange={handleChange('firstName')}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={values.lastName}
                  disabled={this.props.disabled}
                  onChange={handleChange('lastName')}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="emailUser">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={values.emailUser}
                  disabled={this.props.disabled}
                  onChange={handleChange('emailUser')}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="phoneNumberUser">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  value={values.phoneNumberUser}
                  disabled={this.props.disabled}
                  onChange={handleChange('phoneNumberUser')}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="adress">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adress"
                  value={values.adress}
                  disabled={this.props.disabled}
                  onChange={handleChange('adress')}
                  required
                />
              </Form.Group>
            </Row>

            <Button
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
  button: {
    backgroundColor: '#A71D31',
    color: '#F7E7D9',
    border: 'none',
    marginRight: '1vw',
    marginTop: '2vh',
    width: 'auto',
    height: 'auto',
  },
  buttonConfirm: {
    backgroundColor: '#A71D31',
    color: '#F7E7D9',
  },
};

export default DataForm;
