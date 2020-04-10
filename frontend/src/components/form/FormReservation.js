import React, { Component } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";
class UserForm extends Component {
  constructor(props){
    let success = false;
    super(props);
    this.state = {
      step: 1,
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      reservationDate: "",
      hour: "10:00",//sa adauge si back-ul
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


  modifySuccess = (succes) => {
    console.log('succes primit ' + succes)
    this.success = succes;
  }

  render() {
    const { step } = this.state;
    const { userFirstName, userLastName, email, phoneNumber, reservationDate, hour,numberOfSeats} = this.state;
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
            modifySuccess={this.modifySuccess}
          />
        );
      case 3:
        return this.success === true ? <FormSucces/> : <FormFail/>;
      default:
        return null;
    }
  }
}

export default UserForm;
