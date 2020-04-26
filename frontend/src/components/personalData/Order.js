import React, { Component } from "react";
import DeliveryMethod from "./DeliveryMethod";
import PersonalData from "./PersonalData";
import PaymentMethod from "./PaymentMethod";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Success from "./Success";
import Fail from "./Fail";
import axios from "axios";
class Order extends Component {
  constructor(props) {
    super(props);
    this.homeDisabled = "";
    this.restaurantDisabled = "";
    this.message = "";
    this.state = {
      step: 1,
      homeDelivery: false,
      restaurantDelivery: false,
      userFirstName: "",
      userLastName: "",
      userDeliveryAdress: "",
      phoneNumber: "",
      email: "",
      paymentMethod: "",
      tokenId: "",
      submitMessage: "",
      success: false,
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
      this.state.phoneNumber === "" ||
      this.state.email === ""
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
        step: 3,
      });
    }
  };
  changeStep = () => {
    if (
      (this.state.homeDelivery && !this.state.restaurantDelivery) ||
      (!this.state.homeDelivery && this.state.restaurantDelivery)
    ) {
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
      if (input === "homeDelivery") {
        if (this.state.homeDelivery === true) {
          this.homeDisabled = "";
          this.restaurantDisabled = "";
        } else {
          this.homeDisabled = "";
          this.restaurantDisabled = "disabled";
        }
      } else {
        if (this.state.restaurantDelivery === true) {
          this.homeDisabled = "";
          this.restaurantDisabled = "";
        } else {
          this.homeDisabled = "disabled";
          this.restaurantDisabled = "";
        }
      }
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
        userFirstName: data.userFirstName,
        userLastName: data.userLastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        userDeliveryAdress: data.userDeliveryAdress,
        paymentMethod: data.paymentMethod,
        paymentToken: data.paymentToken,
      },
      () => {
        axios({
          method: "post",
          url: "",
          data,
        })
          .then((response) => {
            this.setState({
              success: true,
            });
          })
          .catch((err) => {
            this.setState(
              {
                success: false,
              },
              () => {
                this.message = err.response.data.error.message;
              }
            );
          });
      }
    );
  };
  prevStep = () => {
    this.homeDisabled = "";
    this.restaurantDisabled = "";
    this.setState(
      {
        homeDelivery: false,
        restaurantDelivery: false,
        userDeliveryAdress: "",
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
      tokenId,
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
    let formValues = {
      userFirstName: userFirstName,
      userLastName: userLastName,
      email: email,
      phoneNumber: phoneNumber,
      userDeliveryAdress: userDeliveryAdress,
      paymentMethod: paymentMethod,
      paymentToken: tokenId,
      restaurantId: "5e8b6ecd5935d8350c6c2c2a",
    };
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div>
            <DeliveryMethod
              values={values}
              handleChange={this.handleChange}
              homeDisabled={this.homeDisabled}
              restaurantDisabled={this.restaurantDisabled}
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
            <Button
              onClick={(event) => {
                this.handleSubmit(event);
                this.addFormDetails(event, formValues);
              }}
              style={buttonStyle}
            >
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
                homeDisabled={this.homeDisabled}
                restaurantDisabled={this.restaurantDisabled}
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
              <Button
                onClick={(event) => {
                  this.handleSubmit(event);
                  this.addFormDetails(event, formValues);
                }}
                style={buttonStyle}
              >
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
                homeDisabled={this.homeDisabled}
                restaurantDisabled={this.restaurantDisabled}
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
              <Button
                onClick={(event) => {
                  this.handleSubmit(event);
                  this.addFormDetails(event, formValues);
                }}
                style={buttonStyle}
              >
                Submit
              </Button>
            </div>
          );
        }
      case 3:
        return this.state.success === true ? (
          <Success />
        ) : (
          <Fail response={this.message} prevStep={this.prevStep} />
        );
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
