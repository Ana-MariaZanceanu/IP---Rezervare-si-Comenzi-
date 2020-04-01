import React, { Component } from "react";
import FooterAbout from "./FooterAbout";
import FooterInfo from "./FooterInfo";
import FooterContact from "./FooterContact";
export class FooterComp extends Component {
  render() {
    return (
      <footer>
        <div className="line"></div>
        <div className="footer_container">
          <FooterAbout />
          <FooterInfo />
          <FooterContact />
        </div>
      </footer>
    );
  }
}

export default FooterComp;
