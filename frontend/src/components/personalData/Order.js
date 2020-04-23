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
    if (
      (this.state.homeDelivery && !this.state.restaurantDelivery) ||
      (!this.state.homeDelivery && this.state.restaurantDelivery)
    ) {
      this.checkMessage = "";
      this.setState(
        {
          step: 2,
        },
        () => {
          console.log(this.state.step);
        }
      );
    } else {
      if (this.state.homeDelivery && this.state.restaurantDelivery) {
        this.checkMessage = "You have to choose just one delivery method!";
      }
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
    switch (step) {
      case 1:
        return (
          <div>
            <DeliveryMethod
              values={values}
              handleChange={this.handleChange}
              checkMessage={this.checkMessage}
            />
            <PersonalData
              values={values}
              handleChange={this.handleChange}
              addFormDetails={this.addFormDetails}
              disabled={"disabled"}
              disabledAddress={"disabled"}
            />
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              addFormDetails={this.addFormDetails}
            />
          </div>
        );
      case 2:
        if(this.state.homeDelivery){
          return (
              <div>
                <DeliveryMethod
                    values={values}
                    handleChange={this.handleChange}
                    checkMessage={this.checkMessage}
                />
                <PersonalData
                    values={values}
                    handleChange={this.handleChange}
                    addFormDetails={this.addFormDetails}
                    disabled={""}
                    disabledAddress={""}
                />
                <PaymentMethod
                    values={values}
                    handleChange={this.handleChange}
                    addFormDetails={this.addFormDetails}
                />
              </div>
          );
        }else{
          return (
              <div>
                <DeliveryMethod
                    values={values}
                    handleChange={this.handleChange}
                    checkMessage={this.checkMessage}
                />
                <PersonalData
                    values={values}
                    handleChange={this.handleChange}
                    addFormDetails={this.addFormDetails}
                    disabled={""}
                    disabledAddress={"disabled"}
                />
                <PaymentMethod
                    values={values}
                    handleChange={this.handleChange}
                    addFormDetails={this.addFormDetails}
                />
              </div>
          );
        }

    }
  }
}

export default Order;
