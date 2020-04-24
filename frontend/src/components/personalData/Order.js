import React, { Component } from "react";
import DeliveryMethod from "./DeliveryMethod";
import PersonalData from "./PersonalData";
import PaymentMethod from "./PaymentMethod";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
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
      userDeliveryAdress: "",
      phoneNumber: "",
      paymentMethod: "",
      tokenId: "",
      submitMessage: "",
    };
  }

  modifyTokenID = (token) => {
    this.setState({ tokenId: token });
    console.log("tokenul este  " + token);
  };

  handleSubmit = (e) => {
    if (
      this.state.homeDelivery === false &&
      this.state.restaurantDelivery === false
    ) {
      this.setState({
        submitMessage: "You have to choose a delivery method",
      });
    } else if (
      this.state.userFirstName === "" ||
      this.state.userLastName === "" ||
      this.state.phoneNumber === ""
    ) {
      this.setState({
        submitMessage: "You have to complete and confirm your personal data",
      });
      console.log(this.state.submitMessage);
    } else if (this.state.paymentMethod === "") {
      console.log("no paymentmethod");
      this.setState({
        submitMessage: "You have to choose a payment method",
      });
    } else if (
      this.state.paymentMethod === "card" &&
      this.state.tokenId === ""
    ) {
      console.log("no token");
      this.setState({
        submitMessage: "You have to complete and confirm your card info",
      });
    } else {
      this.setState({
        submitMessage: "",
      });
    }
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
      if (e.target.checked === true) {
        this.setState({ paymentMethod: "cash" });
        console.log(this.state.paymentMethod);
      }
    } else if (input === "onlinePayment") {
      if (e.target.checked === true) {
        this.setState({ paymentMethod: "card" });
        console.log(this.state.paymentMethod);
      }
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
        userDeliveryAdress: data.userDeliveryAdress,
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
      userDeliveryAdress,
      paymentMethod,
    } = this.state;
    const values = {
      homeDelivery,
      restaurantDelivery,
      userFirstName,
      userLastName,
      email,
      phoneNumber,
      userDeliveryAdress,
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
              disabled={"disabled"}
              disabledAddress={"disabled"}
            />
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              modifyTokenID={this.modifyTokenID}
            />
            <br />
            <Card.Text style={errorStyle}>{this.state.submitMessage}</Card.Text>
            <Button onClick={this.handleSubmit} style={buttonStyle}>
              Submit
            </Button>
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
                disabled={""}
                disabledAddress={""}
              />
              <PaymentMethod
                values={values}
                handleChange={this.handleChange}
                modifyTokenID={this.modifyTokenID}
              />
              <br />
              <Card.Text style={errorStyle}>
                {this.state.submitMessage}
              </Card.Text>
              <Button onClick={this.handleSubmit} style={buttonStyle}>
                Submit
              </Button>
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
                disabled={""}
                disabledAddress={"disabled"}
              />
              <PaymentMethod
                values={values}
                handleChange={this.handleChange}
                modifyTokenID={this.modifyTokenID}
              />
              <br />
              <Card.Text style={errorStyle}>
                {this.state.submitMessage}
              </Card.Text>
              <Button onClick={this.handleSubmit} style={buttonStyle}>
                Submit
              </Button>
            </div>
          );
        }
    }
  }
}

const buttonStyle = {
  backgroundColor: "#A71D31",
  color: "#F7E7D9",
};

const errorStyle = {
  color: "#FF0000",
};

export default Order;
