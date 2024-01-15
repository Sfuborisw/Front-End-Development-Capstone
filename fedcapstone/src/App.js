import "./App.css";

import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  );
};

export default App;
