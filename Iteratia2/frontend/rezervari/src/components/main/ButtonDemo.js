import React, {Component} from 'react';

export default class ButtonDemo extends Component{
    render() {
        return(
                <button className="button">{this.props.name}</button>
        )
    }
}