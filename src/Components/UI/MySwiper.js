import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MySwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import goodrich from "./../../assets/images/logos/bfgoodrich.jfif";
import bridgestone from "./../../assets/images/logos/bridgestone.png";
import falken from "./../../assets/images/logos/falken.png";
import gtradial from "./../../assets/images/logos/gtradial.jpg";
import irelli from "./../../assets/images/logos/irelli.png";
import joyroad from "./../../assets/images/logos/joyroad.jfif";
import maxis from "./../../assets/images/logos/maxis.png";
import sailun from "./../../assets/images/logos/sailun.png";
import yana from "./../../assets/images/logos/yana.jpg";
import saf from "./../../assets/images/logos/saf.webp";

const MySwiper = () => {
  return (
    <section id="swiping">
      <h6
        className="h-6"
      >
        Our Partners
      </h6>
      <hr
        className="mb-4 mt-0 d-inline-block 
mx-auto"
        style={{
          position:"relative",
          width: "60px",
          backgroundColor: "#7c4dff",
          height: "2px",
          left:"45vw"
        }}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={saf} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={falken} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={goodrich} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bridgestone} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gtradial} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={irelli} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={joyroad} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maxis} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sailun} alt=" " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yana} alt=" " />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MySwiper;
