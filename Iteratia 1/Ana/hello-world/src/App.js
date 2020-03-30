import React, {Component} from 'react';
import './App.css';
import Counter from "./components/Counter";
// import Hello from "./components/Hello";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";

class App extends Component{
  render() {
    return(
        <div className="App">
            {/*<Greet name={"Ana"} heroName={"batman"}>*/}
            {/*    <p>This is a children paragraph</p>*/}
            {/*</Greet>*/}
            {/*<Greet name={"Maria"} heroName={"wonderwoman"}>*/}
            {/*    <button>Action</button>*/}
            {/*</Greet>*/}
            {/*<Hello/>*/}
            {/*<Welcome name={"Ana"} heroName={"batman"}/>*/}
            {/*<Welcome name={"Maria"} heroName={"wonderwoman"}/>*/}
            {/*<Message/>*/}
            <Counter></Counter>
        </div>
    );
  }
}

export default App;
