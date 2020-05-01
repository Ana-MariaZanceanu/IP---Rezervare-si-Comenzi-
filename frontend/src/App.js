import React from "react";
import "./App.css";
import "./Animation.css";
import ModalForm from "./components/ModalForm";
import Order from "./components/orderCheckout/Order";
import Container from "react-bootstrap/Container";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <div>
      {/*<ModalForm name="Book a table" />*/}

      {/*<Container>
        <Order />
      </Container>*/}
      <MainPage />
    </div>
  );
}

export default App;
