import React, { Component } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";
class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      success: false,
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      reservationDate: "",
      hour: "10:00",//sa adauge si back-ul
      numberOfSeats: "",
    };
  }

  nextStep = (success) => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      success: success,
    });
  };

  prevStep = (success) => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
      success: success,
    });
  };
//ascultam cand se produce un event pe state-ul nostru (pe fiecare input)
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
//schimbam valorile state-ului cu cele introduse in input
  addFormDetails = e => {
    e.preventDefault();
    this.setState({
      userFirstName: e.target.value,
      userLastName: e.target.value,
      email: e.target.value,
      phoneNumber: e.target.value,
      reservationDate: e.target.value,
      hour: e.target.value,
      numberOfSeats: e.target.value,
    });
  };



  render() {
    const { step } = this.state;
    const { userFirstName, userLastName, email, phoneNumber, reservationDate, hour,numberOfSeats} = this.state;
    const { success } = this.state;
    const values = {userFirstName, userLastName, email, phoneNumber, reservationDate, hour,numberOfSeats};
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
          />
        );
      case 3:
        return success === true ? <FormSucces/> : <FormFail/>;
      default:
        return null;
    }
  }
}

export default UserForm;
