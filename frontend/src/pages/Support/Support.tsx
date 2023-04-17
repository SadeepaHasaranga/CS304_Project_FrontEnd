import React from 'react'
import './Support.css'
import { Link } from "react-router-dom";

const AfterLogin = () => {
  return (
    <div className="Supportpage">
      <h1 className="font-bold mt4 text-rose-950 text-center">
        Contact Financial supporters from us
      </h1>
      <div className="flex justify-center h-px">
        <div className="-ml-10">
          <h1 className="font-bold">Bank Loans</h1>

          <h3 className="font-bold">Varity of banks</h3>
          <h3 className="font-bold">Different types of loans</h3>
          <h3 className="font-bold">Reliable responsibilities</h3>
          <button className="bg-emerald-950 hover:bg-blue-400 text-white font-bold py-2 px-4 w-64 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/Insurance"> Banks</Link>
          </button>
          {/* <img className="src=orange" alt="" /> */}
        </div>
        <div className="ml-10">
          <h1 className="font-bold">Leasing Finance</h1>

          <h3 className="font-bold">10+ Leasing companies </h3>
          <h3 className="font-bold">Speed Transactions</h3>
          <h3 className="font-bold">Trustfullness </h3>
          <button className="bg-fuchsia-950 hover:bg-blue-400 text-white font-bold py-2 px-4 w-64 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/Finance"> Finance</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;


