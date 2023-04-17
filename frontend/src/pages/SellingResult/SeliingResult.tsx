import React, { useEffect, useState } from "react";
import SellingCard from "./Components/SellingCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SeliingResult = () => {
  let { selectModel } = useParams();
  console.log(selectModel);
  const sampleData = [
    {
      id: 1,
      model: "Aqua",
      price: "5000000",
      condition: "Recondition",
      milleage: "50000km",
      name: "Sadeepa",
      telephone: "0776828388",
      image:
        "https://www.google.com/search?q=toyota+aqua+in+sri+lanka&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLu8u6uab-AhUMTWwGHQlkBokQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=7qoCWUbLGo2xtM",
    },
    // {
    //   id: 2,
    //   model: "Aqua",
    //   price: "4500000",
    //   condition: "Recondition",
    //   milleage: "1000000",
    //   name: "kamal",
    //   telephone: "0772836469",
    //    image:
    //    "https://www.google.com/search?q=photos&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDlJWk4J7-AhUawzgGHdy4C8sQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=jwXiFOBaYZPt2M",
    // },
  ];

  const [vehicle, setVehicle] = useState<any>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/vehicle/getVehicles`)
      .then((res) => {
        setVehicle(res.data);
        console.log(res.data);
        setFilteredVehicles(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filteredData = vehicle?.filter((emp: any) => {
      emp.model.toLowerCase().includes(selectModel?.toLowerCase());
    });
    setFilteredVehicles(filteredData);
    console.log(filteredData);
  }, []);

  // console.log("AAA>>>", vehicle);

  return (
    <div className="ml-[80px]">
      <div className="grid grid-flow-row grid-cols-2 gap-4">
        {filteredVehicles?.map((a: any, i: number) => (
          <>
            <SellingCard
              model={a.model}
              price={a.price}
              condition={a.cndition}
              milleage={a.mileage}
              name={a.name}
              telephone={a.phonenum}
              image={a.image}
              id={a.vehicleID}
              key={i}
            />
          </>
        ))}
        {/* ))} */}
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <Link to="/Support">Loans</Link>
        </button>
      </div>
    </div>
  );
};

export default SeliingResult;
