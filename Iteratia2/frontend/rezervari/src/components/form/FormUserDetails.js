import React, { Component } from "react";
import {MuiThemeProvider,createMuiTheme }from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={styles.bar} title="Enter User Details" />
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{display:"none"}}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{display:"none"}}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{display:"none"}}
          />
          <br />
          <Button
            variant="outlined"
            style={styles.button}
            onClick={this.continue}>
            Continue
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#e88d72",
    color: "white"
  },
  bar: {
    backgroundColor: "#e88d72"
  }
};

export default FormUserDetails;
