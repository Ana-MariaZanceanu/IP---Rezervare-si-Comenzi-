import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
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
            style={styles.textField}
            id="date"
            label="Reservation date"
            type="datetime-local"
            defaultValue={values.date ? values.date : '2017-05-24T10:30'}
            onChange={handleChange('date')}
          />
          <br />
          <TextField
            style={styles.textField}
            id="number of People"
            label="Number of people"
            defaultValue={values.nrPeople}
            onChange={handleChange('nrPeople')}
          />
          <br />
          <TextField
            style={styles.textField}
            id="observation"
            label="Observation"
            defaultValue={values.observation}
            onChange={handleChange('observation')}
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
    backgroundColor: '#e88d72',
    color: 'white',
    margin: 15,
  },
  bar: {
    backgroundColor: '#e88d72',
  },
  textField: {
    margin: 15,
  },
};

export default FormPersonalDetails;
