import React, { Component } from 'react';
import DataForm from './DataForm';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: '',
      userLastName: '',
      email: '',
      phoneNumber: '',
      adress: '',
    };
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  addFormDetails = (e, data) => {
    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
      emailUser: data.emailUser,
      phoneNumberUser: data.phoneNumberUser,
      adress: data.adress,
    });
  };

  render() {
    const { values, handleChange, addFormDetails } = this.props;

    return (
      <>
        <Accordion>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              disabled={this.props.disabled}
            >
              2. Personal Data
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DataForm
                  values={values}
                  handleChange={handleChange}
                  addFormDetails={addFormDetails}
                  disabled={this.props.disabled}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default PersonalData;
