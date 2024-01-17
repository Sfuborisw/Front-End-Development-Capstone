import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("BookingForm", () => {
  it("renders static text", () => {
    const availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

    render(<BookingForm availableTimes={availableTimes} />);

    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
  });

  it("submits the form with specific values", () => {
    const dispatchMock = jest.fn();
    const navigateMock = jest.fn();

    useNavigate.mockReturnValue(navigateMock);

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

    // Check if the navigate function is called with the correct path
    // expect(navigateMock).toHaveBeenCalledWith("/confirmed-booking");
  });
});
