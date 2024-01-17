import React, { useState, useReducer, useEffect } from "react";
import "../styles.css";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const Bookings = () => {
  const updateTimes = async (selectedDate, dispatch) => {
    try {
      // Use the fetchAPI function to get available times for the selected date
      const fetchedTimes = await fetchAPI(selectedDate);

      // Dispatch the updated times to the reducer
      dispatch({
        type: "UPDATE_TIMES",
        payload: fetchedTimes,
      });

      return fetchedTimes;
    } catch (error) {
      console.error("Error updating times:", error);
      // Handle error or provide a default value
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
  };

  const initializeTimes = async () => {
    try {
      // Fetch available times for today's date
      const today = new Date().toISOString().split("T")[0]; // Get today's date in "YYYY-MM-DD" format
      const fetchedTimes = await fetchAPI(today);

      // Dispatch the updated times to the reducer
      dispatch({
        type: "UPDATE_TIMES",
        payload: fetchedTimes,
      });

      return fetchedTimes;
    } catch (error) {
      console.error("Error fetching available times:", error);
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
  };

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "#495e57" }}>
      <div className="row flex center">
        <div className="col">
          <h1>Bookings</h1>
        </div>
      </div>
      <div className="row flex center">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Bookings;
