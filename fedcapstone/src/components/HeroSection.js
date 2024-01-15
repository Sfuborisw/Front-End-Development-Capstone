import React from "react";
import "../styles.css";
import restauranfood from "../images/restauranfood.jpg"; // Adjust the path based on your project structure

const HeroSection = () => {
  return (
    <div className="container" style={{backgroundColor: '#495e57'}}>
      <div className="row">
        <div className="col col-6" style={{ flex : 6}}>
          <h1>Lettle Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={() => alert('Reservation button clicked')}>Reserve a Table</button>
        </div>
        <div className="col col-6" style={{flex:6, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* <img src={restauranfood} alt="pic"></img> */}
          <img
            src={restauranfood}
            alt="restauranfood"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
