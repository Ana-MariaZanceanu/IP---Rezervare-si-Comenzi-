import React from 'react';
import './App.css';
import './Animation.css';
import ModalForm from './components/ModalForm';
import Order from './components/orderCheckout/Order';
import Container from 'react-bootstrap/Container';
import ShowModalProduct from './components/productModal/ShowModalProduct';
import MainPage from './components/mainPage/MainPage';
import pizzaImage from './components/productModal/images/pizza.png';
// import ShoppingCart from './components/shoppingCart/ShoppingCart';

function App() {
    return (
        <div>
            {/*<ModalForm name="Book a table" />*/}

            <ShowModalProduct id={"5eb17a5c6f436666294bc421"} productAvailability={"in stock"}/>
            {/*<ShoppingCart />*/}
            {/*<Container>
        <Order />
      </Container>*/}
            {/*<MainPage />*/}
        </div>
    );
}

export default App;
