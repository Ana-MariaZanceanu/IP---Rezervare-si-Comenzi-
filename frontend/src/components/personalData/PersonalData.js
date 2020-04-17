import React, { Component } from 'react';
import DataForm from './DataForm';
import collapse from 'react-bootstrap/collapse';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: '',
      userLastName: '',
      email: '',
      phoneNumber: '',
    };
  }
  render() {
    const {values,handleChange,addFormDetails} = this.props;
    return (
      <>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0"  disabled={this.props.disabled}>
                2. Personal Data
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DataForm values={values} handleChange={handleChange} addFormDetails={addFormDetails} disabled={this.props.disabled}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default PersonalData;
