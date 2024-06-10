import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import fullData from "../../static/Full-data";

const Swipper = () => {
  // Используем Set для хранения уникальных значений
  const uniqueItems = fullData.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.swiperuchun === item.swiperuchun &&
          t.mahsulotnomi === item.mahsulotnomi
      )
  );

  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
        effect="coverflow"
      >
        {uniqueItems.map((item, index) => (
          <SwiperSlide key={index} className="swipermini__box">
            <Link>
              <img src={item.swiperuchun} alt={item.mahsulotnomi} />
            </Link>
            <Link>
              <p>{item.mahsulotnomi}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swipper;
