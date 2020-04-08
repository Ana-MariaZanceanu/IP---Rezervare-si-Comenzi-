import React, { Component } from "react";

export class FormConfirm extends Component {
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
      values: { firstName, lastName, email, nrphone, date, nrPeople },
    } = this.props;
    return <h1>Confirm</h1>;
  }
}

export default FormConfirm;
