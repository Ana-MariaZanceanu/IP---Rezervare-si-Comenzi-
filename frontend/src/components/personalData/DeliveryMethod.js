import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

class DeliveryMethod extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {values,handleChange} = this.props;
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            1. Delivery method
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Home delivery" onChange={handleChange('homeDelivery')}/>
                                        <Form.Check type="checkbox" label="Pick up from restaurant" onChange={handleChange('restaurantDelivery')}/>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        );
    }
}

export default DeliveryMethod;