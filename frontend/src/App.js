import React from "react";
import "./App.css";
import "./Animation.css";
import ShowModalProduct from "./components/productModal/ShowModalProduct";
import MainPage from "./components/mainPage/MainPage";

function App() {
    return (
        <div>
            <MainPage />
            <ShowModalProduct id={"5eb17a5c6f436666294bc421"}/>
            <ShowModalProduct id={"5eb17a5c6f436666294bc420"}/>
        </div>
    );
}

export default App;
