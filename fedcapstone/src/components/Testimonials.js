import React from "react";
import "../styles.css";
import Review from "./Review";
import greekSalad from "../images/greek salad.jpg";

const Testimonials = () => {
  return (
    <div className="container" style={{ backgroundColor: "#495e57" }}>
        <div className="col flex center">
          <h1>Testimonials</h1>
        </div>
              <div className="row">
        <div className="col col-4">
          <Review
            image={greekSalad}
            username="User 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            rateOfStar= {4.8}
          />
        </div>
        <div className="col col-4">
          <Review
            image={greekSalad}
            username="User 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            rateOfStar= {4.8}
          />
        </div>
        <div className="col col-4">
          <Review
            image={greekSalad}
            username="User 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            rateOfStar= {4.8}
          />
        </div>
        <div className="col col-4">
          <Review
            image={greekSalad}
            username="User 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            rateOfStar= {4.8}
          />
        </div>
      </div>
    </div>

  );
};

export default Testimonials;
