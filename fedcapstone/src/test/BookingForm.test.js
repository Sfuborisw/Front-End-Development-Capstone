import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "../components/BookingForm";

describe("BookingForm2", () => {
  it("renders static text", () => {
    const availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

    render(<BookingForm availableTimes={availableTimes} />);
  });
  it("submits the form with specific values", () => {
    const dispatchMock = jest.fn();

    render(<BookingForm availableTimes={[]} dispatch={dispatchMock} />);

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2024-01-01" } });

    const timeSelect = screen.getByLabelText("Choose time");
    fireEvent.change(timeSelect, { target: { value: "20:00" } });

    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const submitButton = screen.getByText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: ["18:00", "19:00", "20:00", "21:00", "22:00"],
    });
    expect(screen.getByDisplayValue("2024-01-01")).toBeInTheDocument();
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Birthday")).toBeInTheDocument();
  });
});
