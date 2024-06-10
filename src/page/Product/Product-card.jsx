import React from "react";
import mackbook from "../../assets/mackbook_catalog.png";
import rightnavigate from "../../assets/right__navigate.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import fullData from "../../static/Full-data";
import "./product.css";

const ProductCard = () => {
  const { type = "" } = useParams();

  // `type` ni tekshirish
  console.log("Type:", type);

  // `fullData`ni tekshirish
  console.log("Full Data:", fullData);

  const data = fullData.filter(
    (item) => item.mahsulotnomi.toLowerCase() === type.toLowerCase()
  );

  // Filtrlash natijasini tekshirish
  console.log("Filtered Data:", data);

  const addBasket = (index) => {
    const productToAdd = data[index];
    let localProductData = JSON.parse(localStorage.getItem("basket")) || [];

    localProductData.push(productToAdd);
    localStorage.setItem("basket", JSON.stringify(localProductData));

    console.log(`Mahsulot savatchaga qo'shildi:`, productToAdd);
    console.log(`Hozirgi savatcha:`, localProductData);
  };

  return (
    <div className="home__product-page">
      <div className="home__product-card">
        <div className="home__product-title">
          <div className="home__product-name">
            <img src={mackbook} alt="" />
            <Link to={"/katalog/"}>{`${
              type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
            }`}</Link>
          </div>
          <div className="home__product-navigate">
            <Link to={"/katalog/macbook"}>
              <img src={rightnavigate} alt="" />
            </Link>
          </div>
        </div>
        <div className="home__product-catalog">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="home__product-box" key={index}>
                <img src={item.img[0]} alt="" />
                <p>{item.nameproduct}</p>
                <span>{item.price}$</span>
                <div className="home__product-basket">
                  <h6>
                    Sotuvda <span> {item.nechtaqolgani}</span> dona bor
                  </h6>
                  <ShoppingCartIcon
                    sx={{ width: "20px", color: "crimson" }}
                    onClick={() => addBasket(index)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Hechqanday ma'lumot topilmadi</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
