import React, { Component } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";
class UserForm extends Component {
  constructor(props) {
    let success = false;
    let message = "";
    super(props);
    this.state = {
      step: 1,
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      reservationDate: "",
      hour: "", //sa adauge si back-ul
      numberOfSeats: "",
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //ascultam cand se produce un event pe state-ul nostru (pe fiecare input)
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //schimbam valorile state-ului cu cele introduse in input
  addFormDetails = (e, data) => {
    e.preventDefault();

    this.setState({
      userFirstName: data.userFirstName,
      userLastName: data.userLastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      reservationDate: data.reservationDate,
      hour: e.target.value, //aici trebuie tot cu data.hour..dupa ce adauga si cei de la back hour
      numberOfSeats: data.numberOfSeats,
    });
  };

  modifySuccess = (succes, message) => {
    console.log("succes primit " + succes);
    this.success = succes;
    this.message = message;
  };

  render() {
    const { step } = this.state;
    const {
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      reservationDate,
      hour,
      numberOfSeats,
    } = this.state;
    const values = {
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      reservationDate,
      hour,
      numberOfSeats,
    };
    switch (step) {
      case 1:
        return (
          <FormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addFormDetails={this.addFormDetails}
            values={values}
            modifySuccess={this.modifySuccess}
          />
        );
      case 3:
        return this.success === true ? (
          <FormSucces />
        ) : (
          <FormFail response={this.message} prevStep={this.prevStep} />
        );
      default:
        return null;
    }
  }
}

export default UserForm;
