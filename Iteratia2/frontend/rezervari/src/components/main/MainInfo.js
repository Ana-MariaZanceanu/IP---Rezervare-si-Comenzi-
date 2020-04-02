import React, {Component} from 'react';

export default class MainInfo extends Component{
    render() {
        return(
            <div className="restaurant_info">
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}