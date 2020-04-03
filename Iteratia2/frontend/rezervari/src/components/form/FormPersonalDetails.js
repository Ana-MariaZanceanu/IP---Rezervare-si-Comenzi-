import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={styles.bar} title="Enter User Details" />
          <TextField
            hintText="Enter date occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{ display: "none" }}
          />
          <br />
          <TextField
            hintText="Enter your city"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{ display: "none" }}
          />
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            floatingLabelStyle={{ color: "#a8a8a8" }}
            underlineStyle={{ display: "none" }}
          />
          <br />
          <Button
            variant="outlined"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button variant="outlined" onClick={this.back}>
            Back
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#e88d72",
    color: "white",
    margin: 15
  },
  bar: {
    backgroundColor: "#e88d72"
  }
};

export default FormPersonalDetails;
