import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Input/input.css"
const Input = () => {
  return (
    <div className="home__input">
      <input
        type="text"
        name=""
        id=""
        placeholder="mahsulot va toifalarni qidirish"
      />
      <FavoriteBorderIcon
        sx={{
          "&:hover": { color: "royalblue" },
          color: "#222222",
          fontSize: "40px",

          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Input