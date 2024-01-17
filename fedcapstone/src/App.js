import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";

const App = () => {
  return (
    <Router>
      <>
        <div style={{ display: "flex" }}>
          <Header />
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
