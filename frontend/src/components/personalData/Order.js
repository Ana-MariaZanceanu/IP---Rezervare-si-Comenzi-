import React, { Component } from "react";
import DeliveryMethod from "./DeliveryMethod";
import PersonalData from "./PersonalData";
import PaymentMethod from "./PaymentMethod";

class Order extends Component {
  constructor(props) {
    super(props);
    this.checkMessage = "";
    this.state = {
      step: 1,
      homeDelivery: false,
      restaurantDelivery: false,
      onlinePayment: false,
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      cardNumber: "",
      nameOnCard: "",
      expiryDate: "",
      securityCode: "",
    };
  }

  changeStep = () => {
    if (this.state.homeDelivery || this.state.restaurantDelivery) {
      const { step } = this.state;
      this.setState(
        {
          step: 2,
        },
        () => {
          console.log(this.state.step);
        }
      );
    } else {
      this.setState(
        {
          step: 1,
        },
        () => {
          console.log(this.state.step);
        }
      );
    }
  };

  handleChange = (input) => (e) => {
    if (input === "homeDelivery" || input === "restaurantDelivery") {
      this.setState({ [input]: e.target.checked }, () => {
        console.log(
          "handle " +
            this.state.homeDelivery +
            " " +
            this.state.restaurantDelivery
        );
        this.changeStep();
      });
    } else if (input === "payOnDelivery") {
      this.setState({ onlinePayment: false });
    } else if (input === "onlinePayment") {
      this.setState({ onlinePayment: true });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  addFormDetails = (e, data) => {
    e.preventDefault();
    this.setState(
      {
        homeDelivery: data.homeDelivery,
        restaurantDelivery: data.restaurantDelivery,
        onlinePayment: data.onlinePayment,
        userFirstName: data.userFirstName,
        userLastName: data.userLastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        cardNumber: data.cardNumber,
        nameOncard: data.nameOnCard,
        expiryDate: data.expiryDate,
        securityCode: data.securityCode,
      },
      () => {
        console.log(
          "add " + this.state.homeDelivery + " " + this.state.restaurantDelivery
        );
        this.changeStep();
      }
    );
  };

  render() {
    const {
      homeDelivery,
      restaurantDelivery,
      onlinePayment,
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      cardNumber,
      nameOnCard,
      expiryDate,
      securityCode,
    } = this.state;
    const values = {
      homeDelivery,
      onlinePayment,
      restaurantDelivery,
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      cardNumber,
      nameOnCard,
      expiryDate,
      securityCode,
    };
    const { step } = this.state;
    //console.log("step " + step);
    switch (step) {
      case 1:
        return (
          <div>
            <DeliveryMethod values={values} handleChange={this.handleChange} />
            <PersonalData
              values={values}
              handleChange={this.handleChange}
              addFormDetails={this.addFormDetails}
              disabled={"disabled"}
            />
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              disabled={""}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <DeliveryMethod values={values} handleChange={this.handleChange} />
            <PersonalData
              values={values}
              handleChange={this.handleChange}
              addFormDetails={this.addFormDetails}
              disabled={""}
            />
          </div>
        );
    }
  }
}

export default Order;
