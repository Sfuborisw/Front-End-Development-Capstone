import React from "react";
import "../styles.css";

const Special = ({ image, name, description, orderUrl }) => {
  return (
    <div
      style={{
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ maxWidth: "100%", height: "200px", objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={orderUrl} target="_blank" rel="noopener noreferrer">
        Order a delivery
      </a>
    </div>
  );
};

export default Special;
