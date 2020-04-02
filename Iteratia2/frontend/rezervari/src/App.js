import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import UserForm from "./components/form/UserForm";

function App() {
  return (
    /*<div className="page">
      <Header />
      <Main />
      <Footer />
    </div>*/
    <div className="App">
    <UserForm />
    </div>
  );
}

export default App;
