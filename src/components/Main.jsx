import React from "react";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Katalog from "../components/Katalog/Katalog";
import Home from "../page/Home/Home";
import ProductCard from "../page/Product/Product-card";
import Login from "./Login/Login";
import Kabinet from "./Kabinet/Kabinet";
import Register from "./Register/Register";
import Basket from "./Basket/Basket";
import Resetparol from "./Reset-parol/Reset-parol";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/katalog/:type" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="kabinet" element={<Kabinet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/savat" element={<Basket />} />
        <Route path="/forgot-password" element={<Resetparol/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
