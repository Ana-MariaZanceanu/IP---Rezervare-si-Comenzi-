import React, { Component } from "react";
import MainButtons from "./MainButtons";
import MainInfo from "./MainInfo";

export default class RestaurantDiv extends Component{
    render(){
        return(
            <div className="restaurant_div">
                <MainInfo name={this.props.name}/>
                <MainButtons/>
            </div>
        )
    }
}