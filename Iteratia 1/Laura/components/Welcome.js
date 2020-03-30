import React, { Component } from 'react';
class Welcome extends Component {
  render() {
    const { name, superhero } = this.props;
    return (
      <div>
        <h1>
          Hello {name} aka {superhero}
        </h1>
      </div>
    );
  }
}

export default Welcome;
