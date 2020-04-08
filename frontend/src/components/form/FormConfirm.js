import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FormConfirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, phone, date, hour, nrPeople },
    } = this.props;
    return (
      <div>
        <Card.Title style={styles.text}>Confirm reservation data</Card.Title>
        <ListGroup className="list-group-flush" style={styles.text}>
          <ListGroup.Item>Name: {name}</ListGroup.Item>
          <ListGroup.Item>Email: {email}</ListGroup.Item>
          <ListGroup.Item>Phone no: {phone}</ListGroup.Item>
          <ListGroup.Item>Date: {date}</ListGroup.Item>
          <ListGroup.Item>Hour: {hour}</ListGroup.Item>
          <ListGroup.Item>People no: {nrPeople}</ListGroup.Item>
        </ListGroup>
        <Button
          onClick={this.continue}
          variant="primary"
          type="submit"
          style={styles.button}
        >
          Confirm
        </Button>
        <Button
          onClick={this.back}
          variant="primary"
          type="button"
          style={styles.button}
        >
          Back
        </Button>
      </div>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
    border: "none",
    marginRight: "1vw",
    marginTop: "2vh",
    width: "8vw",
    height: "6vh",
  },
  text: {
    color: "#2B2633",
  },
};

export default FormConfirm;
