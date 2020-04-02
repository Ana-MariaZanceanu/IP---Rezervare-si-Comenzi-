import React, {Component} from 'react';

export default class MainButtons extends Component{
    render() {
        return(
            <div className="restaurant_buttons">
                <button className="button">Reserve</button>
                <button className="button">Order</button>
            </div>
        )
    }
}