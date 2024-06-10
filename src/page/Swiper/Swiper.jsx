import React from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dataSwiper from "../../static/Data-swiper";
import "./swiper.css";

const Swipper = () => {
  return (
    <Swiper
      className="myswiper"
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect="creative"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      }}
    >
      {dataSwiper.map((data, index) => (
        <SwiperSlide key={index} className="myswiper-slider">
          <div>
            <img src={data.img} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;
