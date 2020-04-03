import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Succes extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={styles.bar} title="Succes" />
          <h1>Thank you for your submission </h1>
          <p>You will get an email with further information</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
const styles= {
  bar: {
    backgroundColor: "#e88d72"
  },
}
export default Succes;
