import React, { useState } from "react";
import "./Bank.css";

function UserProfile() {
  // const [username, setUsername] = useState('John Doe');
  // const [email, setEmail] = useState('johndoe@example.com');
  // const [phone, setPhone] = useState('123-456-7890');
  // const [location, setLocation] = useState('New York, NY');
  // const[password,setPassword] = useState('12345682')
  const [user, setUser] = useState<any>();

  // const handleChange = ((e:any)=>{
  //   const{name,value} = e.target;

  // })

  // const handleUsernameChange = (event:any) => {
  //   setUsername(event.target.value);
  // }

  // const handleEmailChange = (event:any) => {
  //   setEmail(event.target.value);
  // }

  // const handlePhoneChange = (event:any) => {
  //   setPhone(event.target.value);
  // }

  // const handleLocationChange = (event:any) => {
  //   setLocation(event.target.value);
  // }
  // const handlePasswordChange = (event: any) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event:any) => {
  //   event.preventDefault();
  //   // Your code to update user profile data goes here
  // }

  return (
    <div className="max-w-lg mx-auto mt-12 bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form>
        <h2 className="text-2xl font-medium mb-6">User Profile</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 font-bold text-stone-950 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            // value={username}
            // onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 ]font-bold text-stone-950 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            // value={email}
            // onChange={handleEmailChange}
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-stone-950 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            // value={password}
            // onChange={handlePasswordChange}
            placeholder="Enter your new password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-950 font-bold leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            // value={location}
            // onChange={handleLocationChange}
            placeholder="Enter your location"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
export default UserProfile;
