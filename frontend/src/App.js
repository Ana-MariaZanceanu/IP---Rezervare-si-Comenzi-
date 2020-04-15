import React from 'react';
import './App.css';
import ModalForm from './components/ModalForm';
import PersonalData from './components/personalData/PersonalData';

function App() {
  return (
    <div>
      <ModalForm name="Book a table" />
      <PersonalData />
    </div>
  );
}

export default App;
