import React, { Component } from 'react';

export class HeaderComp extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default HeaderComp;