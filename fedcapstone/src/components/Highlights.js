import React from "react";
import "../styles.css";
import Special from "./Special";
import bruchetta from "../images/bruchetta.svg";
import greekSalad from "../images/greek salad.jpg";
import lemonDessert from "../images/lemon dessert.jpg";

const Highlights = () => {
  return (
    <div className="container" style={{ backgroundColor: "#495e57" }}>
      <div className="row">
        <div className="col col-6">
          <h1>Special</h1>
        </div>
        <div
          className="col col-6 flex"
          style={{ justifyContent: "end", alignItems: "center" }}
        >
          <button onClick={() => alert("Reservation button clicked")}>
            Online Menu
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col col-4">
          <Special
            image={greekSalad}
            name="Greek Salad"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            orderUrl="https://example.com/order/1"
          />
        </div>
        <div className="col col-4">
          <Special
            image={bruchetta}
            name="Bruchetta"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            orderUrl="https://example.com/order/1"
          />
        </div>
        <div className="col col-4">
          <Special
            image={lemonDessert}
            name="Lemon Dessert"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            orderUrl="https://example.com/order/1"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
