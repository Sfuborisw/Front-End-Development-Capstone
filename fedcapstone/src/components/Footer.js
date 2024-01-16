import React from "react";
import "../styles.css";
import logo from "../images/footerLogo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col col-4 center">
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>

        <div className="col col-4 flex colcenter">
          <h3>Footer Navigation</h3>
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

        <div className="col col-4 flex colcenter">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/">Phone Number</a>
            </li>
          </ul>
        </div>

        <div className="col col-4 flex colcenter">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
