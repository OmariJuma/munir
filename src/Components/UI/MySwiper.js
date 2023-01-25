import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
    
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './MySwiper.css';

// import required modules
import { Pagination, Navigation } from "swiper";


const MySwiper = () => {
    return (<>
    <h3>Our Partners</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
>            <SwiperSlide className="swiper-slide" >Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      );
    }
 
export default MySwiper;