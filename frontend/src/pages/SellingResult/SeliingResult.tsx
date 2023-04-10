import React, { useEffect, useState } from "react";
import SellingCard from "./Components/SellingCard";
import axios from "axios";

const SeliingResult = () => {
  const sampleData = [
    {
      id: 1,
      model: "gfff",
      price: "dkdkd",
      condition: "ssihfsef",
      milleage: "dsfsf",
      name: "amal",
      telephone: "bvdscsdcsd",
      image:
        "https://www.google.com/search?q=photos&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDlJWk4J7-AhUawzgGHdy4C8sQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=jwXiFOBaYZPt2M",
    },
    {
      id: 2,
      model: "gfff",
      price: "dkdkd",
      condition: "ssihfsef",
      milleage: "dsfsf",
      name: "kamal",
      telephone: "bvdscsdcsd",
      image:
        "https://www.google.com/search?q=photos&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDlJWk4J7-AhUawzgGHdy4C8sQ_AUoAXoECAEQAw&biw=1366&bih=617&dpr=1#imgrc=jwXiFOBaYZPt2M",
    },
  ];

  const [vehicle, setVehicle] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}api/v1/vehicle/getVehicles`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("AAA>>>", vehicle);

  return (
    <div className="ml-[80px]">
      <div className="grid grid-flow-row grid-cols-2 gap-4">
        {sampleData?.map((a: any) => (
          <>
            <SellingCard
              model={a.model}
              price={a.price}
              condition={a.condition}
              milleage={a.milleage}
              name={a.name}
              telephone={a.telephone}
              image={a.image}
            />
          </>
        ))}
        {/* ))} */}
      </div>
    </div>
  );
};

export default SeliingResult;
