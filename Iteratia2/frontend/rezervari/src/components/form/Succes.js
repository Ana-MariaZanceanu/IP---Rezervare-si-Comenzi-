import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Succes extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Succes" />
          <h1>Thank you for your submission </h1>
          <p>You will get an email with further information</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Succes;
