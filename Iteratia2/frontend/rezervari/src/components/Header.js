import React, { Component } from 'react';
import logo from './cont.png';
export class HeaderComp extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <ul className="header-ul">
            <li className="header-li">
              <a className="active-home" href="#home">
                Home
              </a>
            </li>
            <li className="header-li">
              <a href="#news">News</a>
            </li>
            <li className="header-li">
              <a href="#contact">Contact</a>
            </li>
            <li className="header-li">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          <div class="cont-logo">
            <img src={logo} alt="logo" />
            <a>Hello,Visitor!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComp;
