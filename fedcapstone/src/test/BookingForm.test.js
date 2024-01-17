import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers

import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  it("renders static text", () => {
    const availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

    render(<BookingForm availableTimes={availableTimes} />);

  });
});
