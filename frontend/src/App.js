import React from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Order from "./components/orderCheckout/Order";
import Container from "react-bootstrap/Container";
import ShowModalProduct from "./components/productModal/ShowModalProduct";

function App() {
  return (
    <div>
      {/*<ModalForm name="Book a table" />*/}

      {/*<Container>*/}
      {/*  <Order />*/}
      {/*</Container>*/}

      <ShowModalProduct productName={"Pizza"} productPrice={"12$"} productAvailability={"in stock"}/>

    </div>
  );
}

export default App;
