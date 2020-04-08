import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class FormFail extends Component {
    render() {
        return (
            <div>
                <Card.Title style={styles.text}>Reservation failed!</Card.Title>
                <p>Sorry, this reservation already exists.</p>
                <p>You can try:</p>
            </div>
        );
    }
}

const styles = {
    text: {
        color: '#A71D31',
    },
};

export default FormFail;
