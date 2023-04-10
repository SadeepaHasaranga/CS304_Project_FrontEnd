import React, { useEffect } from "react";
import "./Selling.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Selling = () => {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState({
    vehicleID: "",
    brand: "",
    model: "",
    manufactureYear: "",
    mileage: "",
    cndition: "",
    price: "",
    description: "",
    name: "",
    email: "",
    phonenum: "",
    address: "",
  });

  // image upload
  const [files, setFiles] = useState<File[]>([]);
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const handleChange = (e: any) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(vehicleData);
    var data = vehicleData;

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}api/v1/vehicle/save`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);

        if (response.status === 200 || response.status === 201) {
          // upload images
          let formData = new FormData();
          files.forEach((file) => {
            formData.append("file", file);
          });

          var config1 = {
            method: "post",
            url: `${process.env.REACT_APP_API_BASE_URL}api/v1/upload/uploadvehicleimages/${response.data.vehicleID}`,
            headers: {},
            data: formData,
          };
          axios(config1)
            .then(function (res) {
              console.log(res.data);
              window.alert("send message");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        //  navigate('/home')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const [imgNames, setImgNames] = useState<any>();
  // useEffect(() => {
  //   var config1 = {
  //     method: "get",
  //     url: `${process.env.REACT_APP_API_BASE_URL}api/v1/upload/VehicleImages/6`,
  //   };
  //   axios(config1)
  //     .then(function (res) {
  //       setImgNames(res.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="sell-page">
      <div className="form-items">
        <div>
          <h1 className="Selling">Enter the your car details </h1>
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="input-area m-4 text-stone-950 font-bold   "
            value={vehicleData.brand}
            onChange={handleChange}
            placeholder="Enter car Brand"
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.model}
            onChange={handleChange}
            placeholder="Enter Model Name"
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="mileage">Mileage</label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.mileage}
            onChange={handleChange}
            placeholder="Mileage"
            style={{ marginLeft: "90px" }}
          />
        </div>
        <div>
          <label htmlFor="manufactureYear">Manufacture Year</label>
          <input
            type="text"
            id="manufactureYear"
            name="manufactureYear"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.manufactureYear}
            onChange={handleChange}
            placeholder="Manufacture year"
            style={{ marginLeft: "1px" }}
          />
        </div>
        <div>
          <label htmlFor="cndition">Condition</label>
          <input
            type="text"
            id="cndition"
            name="cndition"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.cndition}
            onChange={handleChange}
            placeholder="Your vehicle condition"
            style={{ marginLeft: "60px" }}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.price}
            onChange={handleChange}
            placeholder="Price of your vehicle"
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.description}
            onChange={handleChange}
            placeholder="Make sure that it short and sweet..."
            style={{ marginLeft: "47px" }}
          />
        </div>

        <div>
          <label htmlFor="Upload_the_images">Images of car</label>
          <input
            type="file"
            id="Upload_the_images"
            className="input-file"
            multiple
            onChange={handleChangeImage}
            placeholder="Make sure that it short and sweet..."
            style={{ marginLeft: "20px" }}
          />
        </div>

        <div>
          <h1 className="Seller">Enter the seller details </h1>
        </div>

        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={vehicleData.name}
            onChange={handleChange}
            className="input-area m-4  text-stone-950 font-bold"
            style={{ marginLeft: "60px" }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.email}
            onChange={handleChange}
            style={{ marginLeft: "110px" }}
          />
        </div>

        <div>
          <label htmlFor="phonenum">Telephone Number</label>
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            placeholder="Telephone Number"
            value={vehicleData.phonenum}
            onChange={handleChange}
            className="input-area m-4  text-stone-950 font-bold"
          />
        </div>
        <div>
          <label htmlFor="address">Location</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Location"
            className="input-area m-4  text-stone-950 font-bold"
            value={vehicleData.address}
            onChange={handleChange}
            style={{ marginLeft: "85px" }}
          />
        </div>
        <button className="btn-sell" onClick={handleSubmit}>
          Sell
        </button>

        {/* {imgNames?.map((m: any, i: number) => (
          <img
            src={`http://localhost:8080/api/v1/upload/VehicleImages/6/${m}`}
            alt=""
            key={i}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Selling;
