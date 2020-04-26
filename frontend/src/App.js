import React from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Order from "./components/personalData/Order";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      {/*<ModalForm name="Book a table" />*/}

      <Container>
        <Order />
      </Container>
    </div>
  );
}

export default App;
