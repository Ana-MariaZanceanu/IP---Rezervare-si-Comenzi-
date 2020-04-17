import React from 'react';
import './App.css';
import ModalForm from './components/ModalForm';
import Order from "./components/personalData/Order";

function App() {
  return (
    <div>
      <ModalForm name="Book a table" />
      <Order/>
    </div>
  );
}

export default App;
