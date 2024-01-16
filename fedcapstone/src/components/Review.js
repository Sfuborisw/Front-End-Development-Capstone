import React from "react";
import "../styles.css";

const Review = ({ username, image, description, rateOfStar }) => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
      }}
    >
      <h3>{username}</h3>
      <div className="row">
        <div className="col col-6 flex" style={{marginRight: "20px", alignItems: "center"}}>
          <img
            src={image}
            alt={username}
            style={{ maxWidth: "100%", height: "100px", objectFit: "cover" }}
          />
        </div>

        <div className="col col-6 flex">
          <p>{description}</p>
        </div>
      </div>
      <p>Rate of star: { rateOfStar }</p>
    </div>
  );
};

export default Review;
