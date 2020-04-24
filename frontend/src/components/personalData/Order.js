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
        paymentMethod: data.paymentMethod,
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
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      paymentMethod,
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
              modifyTokenID={this.modifyTokenID}
            />
          </div>
        );
      case 2:
        if (this.state.homeDelivery) {
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
                modifyTokenID={this.modifyTokenID}
              />
            </div>
          );
        } else {
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
                modifyTokenID={this.modifyTokenID}
              />
            </div>
          );
        }
    }
  }
}

export default Order;
