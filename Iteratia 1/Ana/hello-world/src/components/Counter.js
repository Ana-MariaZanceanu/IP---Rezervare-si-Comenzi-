import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    increment(){
        this.setState(
            prevState => ({
                count : prevState.count + 1
            })
        )
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    reset(){
        this.setState(
            {
                count : 0
            }
        )
    }

    render() {
        return (
            <div className={"counter"}>
                <div>Count - {this.state.count}</div>
                <div className={"counter_buttons"}>
                    <button onClick={() => this.incrementFive()}>Increment</button>
                    <button onClick={() => this.reset()}>Reset counter</button>
                </div>
            </div>
        );
    }
}

export default Counter;