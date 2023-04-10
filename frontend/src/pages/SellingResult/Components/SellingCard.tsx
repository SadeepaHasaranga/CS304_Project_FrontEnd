import React, { useEffect, useState } from "react";
import image from "../../../photos/Home3.jpg";
import axios from "axios";

const SellingCard = ({
  model,
  price,
  condition,
  milleage,
  name,
  telephone,
  image,
}: any) => {
  return (
    <div className=" w-[600px] bg-black h-[700px] rounded-[20px]">
      <div className="ml-[20px]">
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">Model :</h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{model}</h1>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">Price :</h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{price}</h1>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">Condition :</h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{condition}</h1>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">Milleage :</h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{milleage}</h1>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">
              Seller's Name :
            </h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{name}</h1>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <div>
            <h1 className="text-[30px] font-bold text-white ">
              Phone Number :
            </h1>
          </div>
          <div>
            <h1 className="text-[30px] ml-[20px] text-white">{telephone}</h1>
          </div>
        </div>
      </div>
      <div>
        <img
          src={
            "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          alt="pic"
        />
      </div>
    </div>
  );
};

export default SellingCard;
