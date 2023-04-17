import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone_num: "",
    nic: "",
    address: "",
    password: "",
    role: "",
  });

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    var data = JSON.stringify(userData);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/user/save`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("signup", JSON.stringify(userData));
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log("DATA:>>", data)
  return (
    <div className="signup-page">
      <div>
        <h1 className="Signing text-white">Create Your Account</h1>
      </div>
      <form action="" className="form">
        <div className="flex justify-center flex-col items-center">
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="User m-4 text-black"
              placeholder="Enter your name"
              style={{ marginLeft: "60px" }}
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="User m-4 text-black"
              onChange={handleChange}
              placeholder="Email"
              value={userData.email}
              style={{ marginLeft: "115px" }}
            />
          </div>
          <div>
            <label htmlFor="phone_num">Phone Number</label>
            <input
              type="text"
              id="phone_num"
              onChange={handleChange}
              name="phone_num"
              className="User m-4 text-black"
              placeholder="Phone Number"
              style={{ marginLeft: "20px" }}
              value={userData.phone_num}
            />
          </div>
          <div>
            <label htmlFor="nic">NIC</label>
            <input
              type="text"
              onChange={handleChange}
              id="nic"
              name="nic"
              className="User m-4 text-black"
              placeholder="NIC"
              value={userData.nic}
              style={{ marginLeft: "130px" }}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              onChange={handleChange}
              id="address"
              name="address"
              className="User m-4 text-black"
              placeholder="Address"
              value={userData.address}
              style={{ marginLeft: "85px" }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="User m-4 text-black"
              onChange={handleChange}
              placeholder="Password"
              style={{ marginLeft: "75px" }}
              value={userData.password}
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>

            <select
              id="role"
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="m-4 text-black"
            >
              <option value="Buyer" className="text-black">Buyer</option>
              <option value="Seller" className="text-black">Seller</option>
              <option value="Both" className="text-black">Both</option>
            </select>
          </div>

          <button className="register ml-0" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>

      {/* <button className='register'>Register</button> */}
    </div>
  );
};

export default Signup;
