import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./Bank.css";
import cslide1 from "../../src/photos/cslide1.jpg";

// import cslide2 from "../../photos/cslide2.jpg";
import cslide3 from "../../src/photos/cslide3.jpg";

// import cslide4 from "../../photos/cslide4.jpg";
// import cslide5 from "../../photos/cslide5.jpg";
import cslide6 from "../../src/photos/cslide6.jpg";
// import cslide7 from "../../photos/cslide7.jpg";

import { FreeMode, Navigation, Pagination } from "swiper";

const imgs = [
  cslide3,
  cslide1,
  cslide6,
  cslide3,
  cslide1,
  cslide6,
  cslide3,
  cslide1,
  cslide6,
  cslide3,
  cslide1,
  cslide6,
];

const CarSclider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, Pagination]}
        className="mySwiper swiper swiper-slide swiper-slide img "
      >
        {imgs.map((im: any, i: number) => (
          <SwiperSlide key={i}>
            <img src={im} alt="" width={600} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarSclider;
