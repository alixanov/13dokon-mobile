import React, { useState, useEffect } from "react";
import "./basket.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Basket = () => {
  let localProductData = JSON.parse(localStorage.getItem("basket")) || [];

  // Har bir mahsulot uchun nechtaqolgani holatini saqlash
  const [quantities, setQuantities] = useState(
    localProductData.map(() => 1) // Boshlang'ich holatda har bir mahsulotning soni 1
  );
  const [products, setProducts] = useState(localProductData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Jami narxni hisoblash
    const total = products.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    setTotalPrice(total);
  }, [products, quantities]);

  const onInc = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  const onDic = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  const onDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    setQuantities(quantities.filter((_, i) => i !== index));
    localStorage.setItem("basket", JSON.stringify(newProducts));
  };

  return (
    <div className="basket__container">
      <div className="basket__list">
        {products.map((item, index) => (
          <div className="basket__card" key={index}>
            <img src={item.img[0]} alt={`product-${index}`} />
            <div className="basket__card-info">
              <p>{item.mahsulotnomi}</p>
              {/* <p>{item.productinfo}</p> */}
              <span>{item.price}$</span>
              <div className="savatdaQanchaqolgani">
                <button onClick={() => onDic(index)}> - </button>
                <p>{quantities[index]}</p>
                <button onClick={() => onInc(index)}> + </button>
                <DeleteIcon
                  sx={{ cursor: "pointer", color: "crimson" }}
                  onClick={() => onDelete(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout__product">
        <form>
          <p>Sizning malumotlaringiz</p>
          <label htmlFor="Ism va familyangiz">Ism va familyangiz</label>
          <input type="text" name="name" placeholder="kiriting" />
          <label htmlFor="phone">Telefon raqamingiz</label>
          <input type="text" name="phone" placeholder="+998" />
          <div className="total__price">
            <p>Jami summa: {totalPrice}$</p>
          </div>
          <button>Buyurtma berish</button>
          
        </form>
      </div>
    </div>
  );
};

export default Basket;
