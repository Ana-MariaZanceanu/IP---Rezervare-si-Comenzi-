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
      userFirstName: "",
      userLastName: "",
      email: "",
      phoneNumber: "",
      paymentMethod: "cash",
      tokenId: "",
    };
  }

  modifyTokenID = (token) => {
    console.log("token id primit " + token);
    this.tokenId = token;
  };
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
        console.log(
          "handle " +
            this.state.homeDelivery +
            " " +
            this.state.restaurantDelivery
        );
        this.changeStep();
      });
    } else if (input === "payOnDelivery") {
      this.setState({ paymentMethod: "cash" });
    } else if (input === "onlinePayment") {
      this.setState({ paymentMethod: "card" });
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
        userFirstName: data.userFirstName,
        userLastName: data.userLastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        paymentMethod: data.paymentMethod
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
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      paymentMethod
    } = this.state;
    const values = {
      homeDelivery,
      restaurantDelivery,
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      paymentMethod,
    };
    const { step } = this.state;
    console.log("step " + step);
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
            />
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              modifyTokenID={this.modifyTokenID}
            />
          </div>
        );
      case 2:
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
            />
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              modifyTokenID={this.modifyTokenID}
            />
          </div>
        );
    }
  }
}

export default Order;
