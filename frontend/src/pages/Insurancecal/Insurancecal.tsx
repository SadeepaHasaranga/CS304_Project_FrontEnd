import React, { useState } from 'react'
import './Insurancecal.css'
import Callist from '../../Components/callist'
import Radio from '../../Components/Radio'

const Insurancecal = () => {
  const [value, setValue] = useState<any>();
  const [model, setModel] = useState<any>();
  const [mileage, setMileage] = useState<any>();
  const [year, setYear] = useState<any>();
  const[result,setResult] = useState<any>();
  const [options, setOptions] = useState<any>({
    dsfs:false,

  })
 const handleValueChange = (e:any) => {
  setValue(Number(e.target.value));
};
const handleModelChange = (e:any) => {
  setModel(e.target.value);
};
const handleMileageChange = (e:any) => {
  setMileage(Number(e.target.value));
};
const handleYearChange = (e:any) => {
  setYear(Number(e.target.value));
};
 



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
        <label  className="font-bold">
          Enter your valivation
        </label>
        <input
          type="text"
          value={value}
          className="input-area1 font-bold m-4"
          placeholder="Vehicle value"
          style={{ marginLeft: "70px" }}
        />
      </div>
      <div>
        <label className="font-bold">
          Brand
        </label>
        <input
          type="text"
          value={model}
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
        />
      </div>

      <button className="cal-btn">Calculate</button>
      <h1 className='font-bold'>Your annul insurance fee:{result}</h1>
    </div>
  );
}

export default Insurancecal