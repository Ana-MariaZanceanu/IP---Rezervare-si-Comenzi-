import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class FormFail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card.Title style={styles.text}>{this.props.response}</Card.Title>
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
