import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Person from './components/Person';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
function App() {
  return (
    <div className="App">
      <Stylesheet primary={false} />
      {/*<UserGreeting />
      <ParentComponent />
      <FunctionClick />
      <ClassClick />
      <Message />
      <Counter />
      <Greet name="Maria" superhero="SuperWoman" />
      <Greet name="Ana" superhero="--" />
      <Welcome name="Laura" superhero="CatWomen" />
      <EventBind />
      <NameList />*/}
    </div>
  );
}

export default App;
