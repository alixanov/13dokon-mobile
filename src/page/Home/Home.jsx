import React from "react";
import Swipper from "../Swiper/Swiper";
import Swipermini from "../Swiper/Swiper-mini";
import Input from "../Input/Input";
import "../Home/home.css";
import ProductCard from "../Product/Product-card";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__title">
        <h2>13dokon</h2>
      </div>
      <Input />
      <div className="home__swiper">
        <Swipper />
      </div>
      <Swipermini />
      <ProductCard />
    </div>
  );
};

export default Home;
