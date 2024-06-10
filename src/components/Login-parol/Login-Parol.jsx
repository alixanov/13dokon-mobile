import React from "react";
import "../Kabinet/kabinet.css";
import { Route, Routes } from "react-router-dom";
import Kabinet from "../Kabinet/Kabinet";
import Login from "../Login/Login";

const LoginParol = () => {
  const getData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      {getData ? (
        <Routes>
          <Route path="/kabinet" element={<Kabinet />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default LoginParol;
