import React, { Component } from "react";
import CarouselComp from "./CarouselComp";
import NavBarComp from "./NavBarComp";
import ChooseUsComp from "./ChooseUsComp";
import OurSpecials from "./OurSpecials";
export class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBarComp />
        <CarouselComp />
        <ChooseUsComp />
        <OurSpecials />
      </div>
    );
  }
}

export default MainPage;
