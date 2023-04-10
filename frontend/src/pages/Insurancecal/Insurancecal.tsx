import React, { useState } from 'react'
import './Insurancecal.css'
import Callist from '../../Components/callist'
import Radio from '../../Components/Radio'

const Insurancecal = () => {
  const [value, setValue] = useState<any>(0)
  const [options, setOptions] = useState<any>({
    dsfs:false,

  })

  const calcuator=()=>{
    return value*0.01+options.dsfs*2000
  }
  return (
    <div className="cal">
      <h1 className="font-bold"> Estimate your annual insurance fee</h1>
      <div>
        <h2 className="font-bold">Select your Insurance company</h2>
        <Callist />
      </div>
      <div>
        <label htmlFor="Bname" className="font-bold">
          Enter your valivation
        </label>
        <input
          type="text"
          id="Bname"
          className="input-area1 font-bold m-4"
          placeholder="Vehicle value"
          style={{ marginLeft: "70px" }}
        />
      </div>
      <div>
        <label htmlFor="Bname" className="font-bold">
          Brand
        </label>
        <input
          type="text"
          id="Bname"
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
          type="text"
          id="Bname"
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
          type="text"
          id="Bname"
          className="input-area4 font-bold m-4"
          placeholder="Mileage"
          style={{ marginLeft: "160px" }}
        />
      </div>

      <button className="cal-btn">Calculate</button>
    </div>
  );
}

export default Insurancecal