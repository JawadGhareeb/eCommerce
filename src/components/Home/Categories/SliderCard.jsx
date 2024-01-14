import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="swip">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span> GET OFFER</span>
        </SwiperSlide>
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span>GET OFFER</span>
        </SwiperSlide>
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span>GET OFFER</span>
        </SwiperSlide>
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span>GET OFFER</span>
        </SwiperSlide>
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span>GET OFFER</span>
        </SwiperSlide>
        <SwiperSlide>
          STUDENT NOW GET 10% OFF : <span>GET OFFER</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
