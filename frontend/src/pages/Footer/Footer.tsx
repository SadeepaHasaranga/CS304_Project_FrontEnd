import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-Footer">
      <div className="container ">
        <div className="flex justify-between ">
          <div className="m-4 ml-8 font-semibold text-xl text-white">
            <h4>Our Services</h4>
            <ul className="col1">
              <li>Buy Cars</li>
              <li>Sell cars</li>
            </ul>
          </div>
          <div className=" m-4 font-semibold text-xl text-white">
            <h4>Your Account</h4>
            <ul className="col2">
              <li>Sign Up</li>
              <li>Login</li>
              <li>Fogot Password</li>
            </ul>
          </div>
          <div className="m-4 font-semibold text-xl text-white">
            <h4>Contact Us</h4>
            <ul className="col3">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
