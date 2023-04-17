import React, { useState } from "react";
import "./Insurancecal.css";
import Callist from "../../Components/callist";
import Radio from "../../Components/Radio";

const Insurancecal = () => {
   const [model, setModel] = useState<string>("Aqua"); // Example: model state with default value "Aqua"
   const [mileage, setMileage] = useState<number>(0); // Example: mileage state with default value 0
   const [value, setValue] = useState<number>(0);
  const [year, setYear] = useState<any>();
  

  const [sum, setSum] = useState<number>(0);
  const calculate = () => {
    let m = 0;
    let mil = 0;
    let y = 2000;
    if (model === "Aqua") {
      // Update: Use strict equality operator (===) for comparison
      m = 2000;
    } else {
      m = 3000;
    }

    if (mileage < 50000) {
      mil = 3000;
    } else {
      mil = 5000;
    }

    setSum(m + mil + value * 0.01 + y); // Update: Removed unnecessary Number() conversions
  };
  return (
    <div className="cal">
      <h1 className="font-bold"> Estimate your annual insurance fee</h1>
      <div>
        <h2 className="font-bold">Select your Insurance company</h2>
        <Callist />
      </div>
      <div>
        <label className="font-bold">Enter your valivation</label>
        <input
          type="text"
          value={value}
          className="input-area1 font-bold m-4"
          placeholder="Vehicle value"
          style={{ marginLeft: "70px" }}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label className="font-bold">Brand</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="input-area2 font-bold text-#fffbeb m-4"
          placeholder="Enter Brand"
          style={{ marginLeft: "180px" }}
        />
      </div>
      <div>
        <label htmlFor="Bname" className="font-bold">
          Year
        </label>
        <input
          type="number"
          value={year}
          className="input-area3 font-bold m-4"
          placeholder="Enter year"
          style={{ marginLeft: "190px" }}
        />
      </div>
      {/* <div>
        <Radio/>
      </div> */}
      <div>
        <label htmlFor="Bname" className="font-bold">
          Mileage
        </label>
        <input
          type="number"
          value={mileage}
          id="Bname"
          className="input-area4 font-bold m-4"
          placeholder="Mileage"
          style={{ marginLeft: "160px" }}
          onChange={(e) => setMileage(parseInt(e.target.value))}
        />
      </div>

      <button className="cal-btn" onClick={calculate}>
        Calculate
      </button>
      <h1 className="font-bold">Your annul insurance fee:{sum}LKR</h1>
    </div>
  );
};

export default Insurancecal;
