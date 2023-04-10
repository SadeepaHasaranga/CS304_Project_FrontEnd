import React from "react";
import "./AfterLogin.css";
import { Link } from "react-router-dom";

const AfterLogin = () => {
  return (
    <div className="Afterloginpage">
      <h1 className="font-bold mt4 text-rose-950">
        Welcome to first Sri lankan online cars buying and selling system
      </h1>
      <div className="flex justify-center">
        <div className="-ml-10">
          <h1 className="font-bold">Sell Cars</h1>

          <h3 className="font-bold">Sell your vehicle without anyrisk</h3>
          <h3 className="font-bold">500+ cars are add daily</h3>
          <h3 className="font-bold">Reliable conditions of cars</h3>
          <button className="bg-fuchsia-800 hover:bg-blue-400 text-white font-bold py-2 px-4 w-64 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/Selling"> Selling</Link>
          </button>
        </div>
        <div className="ml-10">
          <h1 className="font-bold">Buy Cars</h1>

          <h3 className="font-bold">Get your car trustworthy</h3>
          <h3 className="font-bold">500+ cars are add daily</h3>
          <h3 className="font-bold">Easaily find your dream car </h3>
          <button className="bg-red-700 hover:bg-blue-400 text-white font-bold py-2 px-4 w-64 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/Buying"> Buying</Link>
            Buying
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
