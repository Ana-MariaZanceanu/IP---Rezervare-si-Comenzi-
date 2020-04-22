import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import PaymentForm from "./PaymentForm";

export class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedPayOnlineBox: false,
      checkedOnDeliveryBox: false,
    };
  }

  handleClickPayOnline = (handleChange, e) => {
    if (this.state.checkedPayOnlineBox === true)
      this.setState({ checkedPayOnlineBox: false });
    else {
      this.setState({ checkedPayOnlineBox: true });
    }
  };
  handleClickOnDelivery = (e) => {
    if (this.state.checkedOnDeliveryBox === true)
      this.setState({ checkedOnDeliveryBox: false });
    else {
      this.setState({ checkedOnDeliveryBox: true });
    }
  };

  render() {
    const { values, handleChange } = this.props;
    if (this.state.checkedPayOnlineBox === false)
      return (
        <>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  3. Select payment method
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        label="Pay online"
                        onClick={this.handleClickPayOnline}
                        onChange={handleChange("onlinePayment")}
                        disabled={this.state.checkedOnDeliveryBox}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Cash on delivery"
                        onChange={handleChange("payOnDelivery")}
                        onClick={this.handleClickOnDelivery}
                        disabled={this.state.checkedPayOnlineBox}
                      />
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </>
      );
    else
      return (
        <>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  3. Select payment method
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        label="Pay online"
                        onClick={this.handleClickPayOnline}
                        onChange={handleChange("onlinePayment")}
                        disabled={this.state.checkedOnDeliveryBox}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Cash on delivery"
                        onChange={handleChange("payOnDelivery")}
                        onClick={this.handleClickOnDelivery}
                        disabled={this.state.checkedPayOnlineBox}
                      />
                    </Form>
                    <br />
                    <PaymentForm handleChange={handleChange} values={values} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </>
      );
  }
}

export default PaymentMethod;
