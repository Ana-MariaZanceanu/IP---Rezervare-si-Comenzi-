import React, { Component } from "react";
import DeliveryMethod from "./DeliveryMethod";
import PersonalData from "./PersonalData";
import PaymentMethod from "./PaymentMethod";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Success from "./Success";
import Fail from "./Fail";
import axios from "axios";

const urlOrders = "http://localhost:3000/api/v1/orders";

class Order extends Component {
  constructor(props) {
    super(props);
    this.homeDisabled = "";
    this.restaurantDisabled = "";
    this.message = "";
    this.success = false;
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
      deliveryMessage: "",
      personalDataMessage: "",
      paymentMessage: "",
      cash: false,
      card: false,
    };
  }

  modifyTokenID = (token) => {
    this.setState({ tokenId: token });
    console.log("tokenul este  " + token);
  };

  handleSubmit = (e, formValues) => {
    if (
      this.state.homeDelivery === false &&
      this.state.restaurantDelivery === false
    ) {
      this.setState({
        deliveryMessage: "You have to choose a delivery method",
      });
    } else {
      this.setState({
        deliveryMessage: "",
      });
    }

    if (
      this.state.userFirstName === "" ||
      this.state.userLastName === "" ||
      this.state.phoneNumber === "" ||
      this.state.email === ""
    ) {
      this.setState({
        personalDataMessage: "You have to complete all your personal data",
      });
    } else {
      this.setState({
        personalDataMessage: "",
      });
    }
    if (this.state.paymentMethod === "") {
      this.setState({
        paymentMessage: "You have to choose a payment method",
      });
    } else if (
      this.state.paymentMethod === "card" &&
      this.state.tokenId === ""
    ) {
      this.setState({
        paymentMessage: "You have to complete and confirm your card info",
      });
    } else {
      this.setState({
        paymentMessage: "",
      });
    }

    if (
      this.state.deliveryMessage === "" &&
      this.state.personalDataMessage === "" &&
      this.state.paymentMessage === ""
    ) {
      this.addFormDetails(e, formValues);
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
    } else if (input === "cash" || input === "card") {
      if (input === "cash") {
        if (this.state.cash === false) {
          this.setState({ cash: true });
          this.setState({ paymentMethod: "cash" });
        } else {
          this.setState({ cash: false });
          this.setState({ paymentMethod: "" });
        }
      }
      if (input === "card") {
        if (this.state.card === false) {
          this.setState({ card: true });
          this.setState({ paymentMethod: "card" });
        } else {
          this.setState({ card: false });
          this.setState({ paymentMethod: "" });
        }
      }
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  postData = async (e, data) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: urlOrders,
      data,
    })
      .then((res) => {
        this.success = true;
        this.setState({
          step: 3,
        });
      })
      .catch((err) => {
        this.success = false;
        this.message = err.response.data.err.message;
        this.setState({
          step: 3,
        });
      });
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
        this.postData(e, data);
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
    let formValues;
    if (this.state.restaurantDelivery === true) {
      formValues = {
        userFirstName: userFirstName,
        userLastName: userLastName,
        email: email,
        phoneNumber: phoneNumber,
        paymentMethod: paymentMethod,
        paymentToken: tokenId,
        restaurantId: "5e8b6ecd5935d8350c6c2c2a",
      };
    } else {
      formValues = {
        userFirstName: userFirstName,
        userLastName: userLastName,
        email: email,
        phoneNumber: phoneNumber,
        userDeliveryAdress: userDeliveryAdress,
        paymentMethod: paymentMethod,
        paymentToken: tokenId,
        restaurantId: "5e8b6ecd5935d8350c6c2c2a",
      };
    }
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div>
            <DeliveryMethod
              handleChange={this.handleChange}
              homeDisabled={this.homeDisabled}
              restaurantDisabled={this.restaurantDisabled}
            />
            <Card.Text style={errorStyle}>
              {this.state.deliveryMessage}
            </Card.Text>
            <PersonalData
              values={values}
              handleChange={this.handleChange}
              disabled={"disabled"}
              disabledAddress={"disabled"}
            />
            <Card.Text style={errorStyle}>
              {this.state.personalDataMessage}
            </Card.Text>
            <PaymentMethod
              values={values}
              handleChange={this.handleChange}
              modifyTokenID={this.modifyTokenID}
            />
            <Card.Text style={errorStyle}>
              {this.state.paymentMessage}
            </Card.Text>
            <Button
              onClick={(event) => {
                this.handleSubmit(event, formValues);
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
                handleChange={this.handleChange}
                homeDisabled={this.homeDisabled}
                restaurantDisabled={this.restaurantDisabled}
              />
              <Card.Text style={errorStyle}>
                {this.state.deliveryMessage}
              </Card.Text>
              <PersonalData
                values={values}
                handleChange={this.handleChange}
                disabled={""}
                disabledAddress={""}
              />
              <Card.Text style={errorStyle}>
                {this.state.personalDataMessage}
              </Card.Text>
              <PaymentMethod
                values={values}
                handleChange={this.handleChange}
                modifyTokenID={this.modifyTokenID}
              />
              <Card.Text style={errorStyle}>
                {this.state.paymentMessage}
              </Card.Text>
              <Button
                onClick={(event) => {
                  this.handleSubmit(event, formValues);
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
                handleChange={this.handleChange}
                homeDisabled={this.homeDisabled}
                restaurantDisabled={this.restaurantDisabled}
              />
              <Card.Text style={errorStyle}>
                {this.state.deliveryMessage}
              </Card.Text>
              <PersonalData
                values={values}
                handleChange={this.handleChange}
                disabled={""}
                disabledAddress={"disabled"}
              />
              <Card.Text style={errorStyle}>
                {this.state.personalDataMessage}
              </Card.Text>
              <PaymentMethod
                values={values}
                handleChange={this.handleChange}
                modifyTokenID={this.modifyTokenID}
              />
              <Card.Text style={errorStyle}>
                {this.state.paymentMessage}
              </Card.Text>
              <Button
                onClick={async (event) => {
                  await this.handleSubmit(event, formValues);
                  this.props.func();
                }}
                style={buttonStyle}
              >
                Submit
              </Button>
            </div>
          );
        }
      case 3:
        return this.success === true ? (
          <Success />
        ) : (
          <Fail response={this.message} prevStep={this.prevStep} />
        );
      default:
        return null;
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
