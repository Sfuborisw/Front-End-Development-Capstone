import React from "react";

const Footer = () => {
  const footerStyle = {
    // backgroundColor: "#f0f0f0"
    // padding: "20px",
  };

  const footerColumnsStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const footerColumnStyle = {
    width: "23%", // Adjust the width as needed
  };

  return (
    <footer style={footerStyle}>
      <div style={footerColumnsStyle} className="footer-columns">
        <div style={footerColumnStyle} className="footer-column">
          {/* 1st Column: Footer Icon */}
          <h3>Footer Icon</h3>
          {/* Add your footer icon or content here */}
        </div>

        <div style={footerColumnStyle} className="footer-column">
          {/* 2nd Column: Footer Navigation */}
          <h3>Footer Navigation</h3>
          {/* Add your footer navigation links here */}
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/menu">MENU</a>
            </li>
            <li>
              <a href="/res">RESERVATIONS</a>
            </li>
            <li>
              <a href="/order">ORDER ONLINE</a>
            </li>
            <li>
              <a href="/login">LOGIN</a>
            </li>
          </ul>
        </div>

        <div style={footerColumnStyle} className="footer-column">
          {/* 3rd Column: Contact */}
          <h3>Contact</h3>
          {/* Add your contact information or form here */}
          <ul>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/">Phone Number</a>
            </li>
          </ul>
        </div>

        <div style={footerColumnStyle} className="footer-column">
          {/* 4th Column: Social Media Links */}
          <h3>Social Media</h3>
          {/* Add your social media links/icons here */}
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
