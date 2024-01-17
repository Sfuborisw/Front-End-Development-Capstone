import React, { useState, useReducer } from "react";
import "../styles.css";
import BookingForm from "./BookingForm";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const updateTimes = (selectedDate) => {
    return ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  };

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  return (
    <div className="container" style={{ backgroundColor: "#495e57" }}>
      <div className="row flex center">
        <div className="col">
          <h1>BookingPage</h1>
        </div>
      </div>
      <div className="row flex center">
        {/* <BookingForm/> */}
        {/* <BookingForm availableTimes={availableTimes} /> */}
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default BookingPage;
