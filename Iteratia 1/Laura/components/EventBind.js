import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hey( class EventBind)'
    };
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   });
  //   console.log(this);
  //}

  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Click here</button>*/}
        {/*<button onClick={() => this.clickHandler()}>Click here</button>*/}
        <button onClick={this.clickHandler}>Click here</button>
      </div>
    );
  }
}

export default EventBind;
