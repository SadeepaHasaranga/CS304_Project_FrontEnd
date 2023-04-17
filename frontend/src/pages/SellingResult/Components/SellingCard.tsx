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
  id,
}: any) => {
  const [names, setNames] = useState<any>();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/upload/VehicleImages/${id}`
      )
      .then((res) => setNames(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" w-[600px] bg-black min-h-[100px] rounded-[20px] py-5">
      <div className="ml-[20px]">
        <div className="flex justify-start">
          <div>
            <h3 className="text-[30px] font-bold text-white ">Model :</h3>
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
            <h1 className="text-[30px] ml-[20px] text-white">{price}LKR</h1>
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
            <h1 className="text-[30px] ml-[20px] text-white">{milleage}km</h1>
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
        {/* {image} */}
        {names?.map((name: any, i: number) => (
          <>
            <img
              key={i}
              src={`${process.env.REACT_APP_API_BASE_URL}/api/v1/upload/VehicleImages/${id}/${name}`}
              alt="pic"
            />
          </>
        ))}
        {/* <img
          src="https://cdn.motor1.com/images/mgl/l9KLM/s1/2022-toyota-aqua-jdm.webp"
          alt="pic"
        /> */}
      </div>
    </div>
  );
};

export default SellingCard;
