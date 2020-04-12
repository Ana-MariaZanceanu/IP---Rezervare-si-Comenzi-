import React, {Component} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

class FormConfirm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            success : false,
            message : ""
        };
    }

    continue = (e) => {
        e.preventDefault();
        this.props.modifySuccess(this.state.success, this.state.message);
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    addFormDetails = (e, data) => {
        this.props.addFormDetails(e);
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/reservations',
            data
        })
            .then(response => {
              this.setState({
                  success: true,
                  message: response.statusText,
              },() => {
                  this.continue(e);
              })
            })
            .catch(error => {
                this.setState({
                    success: false,
                    message: error.message,
                },() => {
                    this.continue(e);
                })
            });
    };


    render() {
        const {
            values: {
                userFirstName,
                userLastName,
                email,
                phoneNumber,
                reservationDate,
                hour,
                numberOfSeats,
            },
        } = this.props;
        let formValues = {
            userFirstName: userFirstName,
            userLastName: userLastName,
            email: email,
            phoneNumber: phoneNumber,
            reservationDate: reservationDate,
            //hour: hour,
            numberOfSeats: numberOfSeats,
            restaurantId: '5e8b6ecd5935d8350c6c2c2a',
        };
        return (
            <div>
                <Card.Title style={styles.text}>Confirm reservation data</Card.Title>
                <ListGroup className="list-group-flush" style={styles.text}>
                    <ListGroup.Item>First Name: {userFirstName}</ListGroup.Item>
                    <ListGroup.Item>Last Name: {userLastName}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                    <ListGroup.Item>Phone Number: {phoneNumber}</ListGroup.Item>
                    <ListGroup.Item>Number of Seats: {numberOfSeats}</ListGroup.Item>
                    <ListGroup.Item>Date: {reservationDate}</ListGroup.Item>
                    <ListGroup.Item>Hour: {hour}</ListGroup.Item>
                </ListGroup>
                <Button
                    onClick={(event) => {
                        this.addFormDetails(event, formValues);
                    }}
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
        width: "auto",
        height: "auto",
    },
    text: {
        color: "#2B2633",
    },
};

export default FormConfirm;
