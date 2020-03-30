import React, { Component } from 'react';

export class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Laura</div>;
    } else {
      return <div>WelcomeGuest</div>;
    }
  }
  // return
  // (<div>
  //    <div>Welcome Guest</div>
  //    <div>Welcome Laura</div>
  // </div>
  //  )
}

export default UserGreeting;
