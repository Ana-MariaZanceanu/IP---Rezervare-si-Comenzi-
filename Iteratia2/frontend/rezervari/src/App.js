import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      {/*<div className="App">*/}
      {/*  <UserForm />*/}
      {/*</div>*/}
    </div>

  );
}

export default App;
