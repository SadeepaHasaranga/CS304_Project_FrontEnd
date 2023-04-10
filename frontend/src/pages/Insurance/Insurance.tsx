import React, { useState } from "react";
import "./Insurance.css";
import Check1 from "../../Components/Check1";
import { ClassNames } from "@emotion/react";
import Banklist from "../../Components/Banklist";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();
  const [bankData, setBankData] = useState({
    name: "",
    phonenum: "",
    address: "",
    amount: "",
    bankName: "",
    job: "",
  });
  const handleChange = (e: any) => {
    setBankData({ ...bankData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    var data = bankData;

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}api/v1/bank/save`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        //  navigate('/home')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Insurance">
      <h1>Enter the your details</h1>

      <div className="checkbox">
        <Banklist Bank={bankData.bankName} handleChange={handleChange} />
      </div>
      <div className="Form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-area"
            placeholder="Name"
            value={bankData.name}
            onChange={handleChange}
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="job">Job</label>
          <input
            type="text"
            id="job"
            name="job"
            className="input-area"
            placeholder="Enter job"
            value={bankData.job}
            onChange={handleChange}
            style={{ marginLeft: "120px" }}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="input-area"
            placeholder="Enter Address"
            value={bankData.address}
            onChange={handleChange}
            style={{ marginLeft: "90px" }}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            className="input-area"
            placeholder="Enter Amount"
            value={bankData.amount}
            onChange={handleChange}
            style={{ marginLeft: "90px" }}
          />
        </div>
        <div>
          <label htmlFor="phonenum">phone number</label>
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            className="input-area"
            placeholder="Enter phone number"
            value={bankData.phonenum}
            onChange={handleChange}
            style={{ marginLeft: "40px" }}
          />
        </div>
      </div>

      <button className="Bank" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Insurance;
