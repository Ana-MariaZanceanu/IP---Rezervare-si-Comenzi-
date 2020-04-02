import React, {Component} from 'react';
import ButtonDemo from "./ButtonDemo";
import PopForm from "../PopForm";

export default class MainButtons extends Component{
    render() {
        return(
            <div className="restaurant_buttons">
                <PopForm name="Reserve"/>
                <ButtonDemo name="Order"/>
            </div>
        )
    }
}