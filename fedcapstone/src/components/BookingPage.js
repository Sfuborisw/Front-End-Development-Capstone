import React from "react";
import "../styles.css";
import Special from "./Special";
import bruchetta from "../images/bruchetta.svg";
import greekSalad from "../images/greek salad.jpg";
import lemonDessert from "../images/lemon dessert.jpg";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div className="container" style={{ backgroundColor: "#495e57" }}>
      <div className="row flex center">
        <div className="col">
          <h1>BookingPage</h1>
        </div>
      </div>
      <div className="row flex center">
        <BookingForm/>
      </div>
    </div>
  );
};

export default BookingPage;
