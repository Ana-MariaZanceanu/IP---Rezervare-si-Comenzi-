import React, { Component } from "react";
import FooterAbout from "./FooterAbout";
import FooterInfo from "./FooterInfo";
import FooterContact from "./FooterContact";
export class FooterComp extends Component {
  render() {
    return (
      <footer>
        <div class="line"></div>
        <div class="footer_container">
          <FooterAbout />
          <FooterInfo />
          <FooterContact />
        </div>
        <div class="line"></div>
      </footer>
    );
  }
}

export default FooterComp;
