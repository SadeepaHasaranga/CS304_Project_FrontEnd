import React, { useState } from "react";
import "./Buying.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Buying = () => {
  const [model, setModel] = useState<string>("");
  const [min, setmin] = useState<number>(0);
  const [max, setmax] = useState<number>(10000000000000);
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
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Vehictype" className="lable1">
            Min Price (Rs)
          </label>
          <input
            type="text"
            id="Vehitype"
            className="buycar m-4 text-stone-950 font-bold"
            placeholder="Enter min price"
            onChange={(e) => setmin(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="Vehictype" className="lable1">
            Max Price (Rs)
          </label>
          <input
            type="text"
            id="Vehitype"
            className="buycar m-4 text-stone-950 font-bold"
            placeholder="Enter max price"
            onChange={(e) => setmax(parseInt(e.target.value))}
          />
        </div>
        <button className="buy ">
          <Link to={`/SellingResult/${model}/${min}/${max}`}>Buy</Link>
        </button>
      </div>
      {/* <button className='buy'>Buy</button> */}
    </div>
  );
};

export default Buying;
