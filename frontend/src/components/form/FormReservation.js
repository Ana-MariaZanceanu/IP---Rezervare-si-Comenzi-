import React, { Component } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";
class UserForm extends Component {
  state = {
    step: 1,
    success: false,
    name: "",
    email: "",
    phone: "",
    date: "",
    hour: "10:00",
    nrPeople: "",
  };

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

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { name, email, phone, date, hour, nrPeople } = this.state;
    const { success } = this.state;
    const values = {
      name,
      email,
      phone,
      date,
      hour,
      nrPeople,
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
