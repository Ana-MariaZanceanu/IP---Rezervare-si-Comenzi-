import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, date, nrPeople, observation }
    } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={styles.bar} title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Date" secondaryText={date} />
            <ListItem primaryText="Number of people" secondaryText={nrPeople} />
            <ListItem primaryText="Observation" secondaryText={observation} />
          </List>
          <Button
            variant="outlined"
            style={styles.button}
            onClick={this.continue}
          >
            Confirm
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

export default Confirm;
