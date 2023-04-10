import React, { useState } from "react";
import "./Login.css";
import car from "../../photos/car.jpg";
import car1 from "../../photos/car1.jpg";
import radio1 from "../../Components/Radio";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>({
    email: "",
    password: "",
  });

  //post requset
  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    // var data = JSON.stringify(user);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(response);
        if (response.data !== null) {
          navigate("/AfterLogin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const handleSignIn = (event) => {
  //   event.preventDefault();
  //   // Do sign-in logic here
  //   setIsSignedIn(true);
  // };

  return (
    <div className="full">
      {/* <img className='background-image' src="car1" alt="car1 photo" /> */}
      <div>
        <img className="login-image" src={car} alt="car photo" />
      </div>
      <div className="login-section">
        <div>
          <h1 className="logintext">Login</h1>
          <p className="Text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* <div style={{display:'block'}}> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-text">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            className="input-text  text-slate-50"
            placeholder="Email"
            value={user.email}
            style={{ marginLeft: "35px", paddingLeft: "10px" }}
          />
          <div />
          <div>
            <label htmlFor="input-text">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              value={user.password}
              className="input-text  text-slate-50 "
              placeholder="Password"
              style={{ paddingLeft: "10px" }}
            />
          </div>
          <div>
            <p className="Agreetext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            {/* <radio1/> */}
          </div>
          <button className="btn-submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
