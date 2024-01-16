import React from "react";
import "../styles.css";
import restauranfood from "../images/restauranfood.jpg"; // Adjust the path based on your project structure

const About = () => {
  return (
    <div className="container" style={{backgroundColor: '#495e57'}}>
      <div className="row" style={{ minHeight: '500px'}}>
        <div className="col col-6">
          <h1>About Lettle Lemon</h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="col col-6 flex" style={{position: "relative", margin: "3rem",justifyContent: 'end', alignItems: 'center' }}>
          <img
            src={restauranfood}
            alt="restauranfood"
            className="image1"
            style={{maxWidth: "200px"}}
          />
          <img
            src={restauranfood}
            alt="restauranfood"
            className="image2"
            style={{maxWidth: "200px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
