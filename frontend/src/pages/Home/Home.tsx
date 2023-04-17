import React from "react";
import "./Home.css";
import car_home from "../../photos/car_home.jpg";
import Logos1 from "../../photos/Logos.jpg";
// import toyota_logo from '../../photos/toyota_logo.jpg'
import Home2 from "../../photos/Home2.jpg";
import Home3 from "../../photos/Home3.jpg";
import Home4 from "../../photos/Home4.jpg";
import newlogos from "../../photos/newlogos.jpg";
import world from "../../photos/world.jpg";
import new_home from "../../photos/new_home.jpg";
import HomeCarousel from "../../Components/HomeCarousel";
import carbmw from "../../photos/carbmw.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "better-react-carousel";
import { Box } from "@mui/material";
// import MiniCarousel from "../../Components/MiniCarousel";
import cslide1 from "../../photos/cslide1.jpg";
// import cslide2 from "../../photos/cslide2.jpg";
import cslide3 from "../../photos/cslide3.jpg";
// import cslide4 from "../../photos/cslide4.jpg";
// import cslide5 from "../../photos/cslide5.jpg";
import cslide6 from "../../photos/cslide6.jpg";
import Bank from "../Banks/Bank";
import CarSclider from "../../Components/CarSclider";

const images = [new_home,car_home,carbmw];
const images1 = [new_home, carbmw, new_home];

const Home = () => {
  return (
    <div className="home">
      <Box>
        <Box position={"absolute"}>
          <h1>ASCCCC</h1>
        </Box>

        <SimpleImageSlider
          width={1350}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </Box>

      {/* <div className='count'>1/2</div> */}
      {/* <img className='cover-image' src={car_home} alt="" /> */}
      {/* <div className="nav-links"> */}
      {/* <h1>Buy and Sell your cars</h1> */}
      {/* <h4> fast and hassle free for the best <br/>price in the Sri Lanka</h4> */}
      {/* </div> */}

      {/* <HomeCarousel img={car_home} head='Buy and Sell your cars' desc1='fast and hassle free for the best' desc2='price in the Sri Lanka'/> */}
      {/* <HomeCarousel img={new_home} />  */}
      {/* <HomeCarousel img={carbmw} />  */}
      <div />

      <div>
        <h1 className="car_brands font-bold text-center mt-4">
          Our Top Selling car brands
        </h1>

        <img className="toyota" src={newlogos} />
      </div>

      {/* <div className='home1'> 
   
    <Box>

    <Box position={'absolute'}>
    <h1>ASCCCC</h1>
    </Box>

    <SimpleImageSlider
    width={500}
    height={500}
    images={images1}
    showBullets={true}
    showNavs={true}
  />
  
    </Box>
         </div> */}

      <div>
        <img className="world" src={world} alt="" />
        <div className="diff">
          <h1 className="m-4 font-bold text-rose-950">
            What makes Autocarsale.com different?
          </h1>
          <p className="text-black text-base leading-7 mb-4 font-bold m-4">
            Autocarsale.com offers its car trading professionals exclusive
            access to a stock of more than 30,000
            <br /> inspected used cars, while taking care of the whole B2B
            transaction. This includes transport, car and document handling!
          </p>
          <p className="text-black text-base leading-7 mb-4 font-bold m-4">
            Working with Autocarsale.com removes any barriers of buying and
            selling cars across Srilanka and makes car trading faster, easier
            and 100% digital. Start now by registering for free and benefit from
            our digital solutions!
            <br />
            Dedicated account managers
            <br />
            Large brand-independent variety of cars
            <br />
            No hidden fees
          </p>
        </div>
      </div>
      <div className="minicarousel">
        <h1 className="font-bold text-center mt-4">
          Find your Best car from us..
        </h1>
        <div className="h-[200px]">
          <CarSclider />
        </div>
      </div>
    </div>
  );
};

export default Home;
