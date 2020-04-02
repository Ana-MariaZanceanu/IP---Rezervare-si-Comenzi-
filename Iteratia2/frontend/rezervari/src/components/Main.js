import React, { Component } from "react";
import RestaurantDiv from './main/RestaurantDiv'
export class MainComp extends Component {
  render() {
    return (
      <main>
          <RestaurantDiv name="Restaurant 1"/>
          <RestaurantDiv name="Restaurant 2"/>
          <RestaurantDiv name="Restaurant 3"/>
          <RestaurantDiv name="Restaurant 4"/>
      </main>
    );
  }
}

export default MainComp;
