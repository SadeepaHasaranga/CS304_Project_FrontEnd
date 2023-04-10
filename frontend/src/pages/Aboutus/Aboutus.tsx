import React from "react";
import "./Aboutus.css";
import CarSclider from "../../Components/CarSclider";

const Aboutus = () => {
  return (
    <div className="aboutfull">
      <h1>About Us</h1>
      <div className="About">
        <h2>About Autocarsale.com</h2>
        <h4>
          Autocarsale.com is the first automobile e-magazine in Sri Lanka which
          focused towards Sri-Lankan motoring market place. It provides State of
          the Art services to thousands of clients accessing the site every day.
          By now, it has become so popular that the name "AutoLanka.com” has
          become a household name among motor enthusiasts and car buyers/sellers
          in Sri Lanka. At AutoLanka.com we aim to provide a streamlined car
          buying and selling process and allow our customers to be confident
          when it comes to trading vehicles through us.
        </h4>
        <br />
        <h2>Why use AutoLanka.com to buy and sell your vehicles?</h2>
        <h4>
          We are the pioneers – autoLanka.com is the first automobile e-magazine
          in Sri Lanka and we have been serving our customers for nearly 2
          decades. People have trust in autoLanka.com and it’s the best market
          place to showcase your vehicle to thousands of prospective car buyers
          logging in to the website every day.
        </h4>
        <br />
        <h2>Wide range to choose from - </h2>
        <h4>
          {" "}
          AutoLanka.com is the best place to browse for your next vehicle.
          Whether you look for a motor bike, car, van, SUV or a commercial
          vehicle, we offer over 10,000 new, used and reconditioned vehicles for
          you in our website. We have an average of 30-40 vehicles adding to our
          list every day.
        </h4>
        <br />
        <h4>
          Quality Checks - To ensure high quality service and a smooth online
          trading experience, all advertisements under autoLanka.com classifieds
          are closely monitored by our sales team before publishing online.
          Quick and Easy– Our new and easy to use interface is designed to cater
          customers to publish their advertisements at the comfort of their home
          or at work. Simply logo on to autoLanka.com website and start posting
          your advertisements today! Genuine and Affordable - We charge a
          reasonable and affordable fee for our service and make sure that all
          the advertisements published in Autolanka .com are genuine.
        </h4>
      </div>
      <div>
        <CarSclider />
      </div>
    </div>
  );
};

export default Aboutus;
