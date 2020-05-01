import React from 'react';
import './App.css';
import './Animation.css';
import ModalForm from './components/ModalForm';
import Order from './components/orderCheckout/Order';
import Container from 'react-bootstrap/Container';
import ShowModalProduct from './components/productModal/ShowModalProduct';
import MainPage from './components/mainPage/MainPage';
import pizzaImage from './components/productModal/images/pizza.png';
function App() {
  return (
    <div>
      {/*<ModalForm name="Book a table" />*/}

      <ShowModalProduct
        img={pizzaImage}
        productName={'Pizza'}
        productPrice={'12$'}
        productAvailability={'in stock'}
      />

      {/*<Container>
        <Order />
      </Container>*/}
      {/*<MainPage />*/}
    </div>
  );
}

export default App;
