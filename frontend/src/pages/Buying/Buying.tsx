import React from "react";
import "./Buying.css";
const Buying = () => {
  return (
    <div>
      <div className="buy-page">
        <h1 className="Buying">
          Enter the Details about car as you wish to buy{" "}
        </h1>
      </div>
      <div className="form-buy">
        <div>
          <label htmlFor="Vehictype" className="lable1">
            Car Type
          </label>
          <input
            type="text"
            id="Vehitype"
            className="buycar m-4 text-stone-950 font-bold"
            placeholder="Enter car type"
          />
        </div>
        <div>
          <label htmlFor="model">Car Model</label>
          <input
            type="text"
            id="model"
            className="buycar m-4 ml-5 text-stone-950 font-bold"
            placeholder="Enter car model"
          />
        </div>
        <button className="buy "> Buy</button>
      </div>
      {/* <button className='buy'>Buy</button> */}
    </div>
  );
};

export default Buying;