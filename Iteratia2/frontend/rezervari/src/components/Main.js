import React, { Component } from "react";

export class MainComp extends Component {
  render() {
    return (
      <main>
        <div className="restaurant_div">
            <div className="restaurant_info">
                <h2>Restaurant 1</h2>
            </div>
            <div className="restaurant_buttons">
                <button className="button" id="rezerva_button">Rezervă</button>
                <button className="button" id="comanda_button">Comandă</button>
            </div>

        </div>
        <div className="restaurant_div">
            <div className="restaurant_info">
                <h2>Restaurant 2</h2>
            </div>
            <div className="restaurant_buttons">
                <button className="button" id="rezerva_button">Rezervă</button>
                <button className="button" id="comanda_button">Comandă</button>
            </div>
        </div>
        <div className="restaurant_div">
            <div className="restaurant_info">
                <h2>Restaurant 3</h2>
            </div>
            <div className="restaurant_buttons">
                <button className="button" id="rezerva_button">Rezervă</button>
                <button className="button" id="comanda_button">Comandă</button>
            </div>

        </div>
        <div className="restaurant_div">
            <div className="restaurant_info">
                <h2>Restaurant 4</h2>
            </div>
            <div className="restaurant_buttons">
                <button className="button" id="rezerva_button">Rezervă</button>
                <button className="button" id="comanda_button">Comandă</button>
            </div>
        </div>
      </main>
    );
  }
}

export default MainComp;
