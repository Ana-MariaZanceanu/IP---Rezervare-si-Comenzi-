import React, {Component} from 'react';
import ButtonDemo from "./ButtonDemo";

export default class MainButtons extends Component{
    render() {
        return(
            <div className="restaurant_buttons">
                <ButtonDemo name="Reserve"/>
                <ButtonDemo name="Order"/>
            </div>
        )
    }
}