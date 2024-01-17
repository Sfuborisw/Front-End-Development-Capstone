import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if all fields are valid
    setIsFormValid(date && time && guests >= 1 && guests <= 10 && occasion);
  }, [date, time, guests, occasion]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation before submitting
    if (isFormValid) {
      const submissionResult = await submitAPI({ date, time, guests, occasion });

      if (submissionResult) {
        navigate("/confirmed-booking");
      } else {
        console.error("Form submission failed");
      }
    } else {
      console.error("Form is invalid. Please check all fields.");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({
      type: "UPDATE_TIMES",
      payload: updateTimes(selectedDate),
    });
    setDate(selectedDate);
  };

  const updateTimes = (selectedDate) => {
    return ["18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
};

export default BookingForm;
