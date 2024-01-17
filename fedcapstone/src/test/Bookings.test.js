import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers

import Bookings from "../components/Bookings";

describe("Bookings", () => {
  it("renders the Bookings component", () => {
    render(<Bookings />);

    const headingElement = screen.getByRole("heading", { name: /Bookings/i });
    expect(headingElement).toBeInTheDocument();
  });
});
