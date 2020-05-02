import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalProduct from "./ModalProduct";

export default function ShowModalProduct(props) {
  const [modalShow, setModalShow] = useState(false);
  const {img,productName,productPrice,productAvailability} = props;
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Product
      </Button>
      <ModalProduct show={modalShow} onHide={() => setModalShow(false)} img={img} productName={productName} productPrice={productPrice} productAvailability={productAvailability}/>
    </div>
  );
}