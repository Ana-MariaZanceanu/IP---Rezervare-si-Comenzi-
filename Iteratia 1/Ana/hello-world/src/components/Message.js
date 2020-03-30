import React,{Component} from "react";

class Message extends Component{
    constructor() {
        super();
        this.state = {
            message : "Welcome visitor!",
            anotherMessage : "ByeBye!"
        }
    }

    changeMessage(){
        this.setState({
            message : "Thank you for subscribing!",
            anotherMessage : "GoodBye!"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <h1>{this.state.anotherMessage}</h1>
            </div>
        )
    }
}

export default Message