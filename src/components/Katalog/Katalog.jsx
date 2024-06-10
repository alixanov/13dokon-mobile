import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputSearch from "../../page/Input/Input-search";
import Footer from "../Footer/Footer";
import fullData from "../../static/Full-data";
import "../Katalog/katalog.css";

const Katalog = () => {
  const { type } = useParams();
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setCategory(item.designation);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setCategory("");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 390,
    minHeight: "100vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    zIndex: 50,
  };

  const uniqueData = fullData.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.icontitle === item.icontitle && t.designation === item.designation
      )
  );

  // Функция для фильтрации уникальных namelist
const uniqueNamelist = (designation) => {
  const filteredData = fullData.filter(
    (item) => item.designation === designation
  );
  const seen = new Set();
  const uniqueList = [];
  filteredData.forEach((item) => {
    item.namelist.forEach((nameItem) => {
      if (!seen.has(nameItem)) {
        seen.add(nameItem);
        uniqueList.push({ ...item, namelist: [nameItem] });
      }
    });
  });
  return uniqueList;
};


  return (
    <div className="catalog__container">
      <InputSearch />
      <div className="catalog__list">
        {uniqueData.map((item, index) => (
          <div key={index} className="catalog__chapter">
            <div className="catalog__chapter-name">
              <img src={item.icontitle} alt={item.nameproduct} />
              <Link onClick={() => handleOpen(item)}>{item.designation}</Link>
            </div>
            <div className="catalog__chapter-img">
              <EastOutlinedIcon
                sx={{ color: "#222222" }}
                onClick={() => handleOpen(item)}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Modal
          open={Boolean(selectedItem)}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="catalog__open-modal">
            <div className="modal__input">
              <InputSearch />
            </div>
            <div className="modal__catalog-list">
              <img
                src={selectedItem.icontitle}
                alt={selectedItem.designation}
              />
              {/* <Link to={`/katalog/${selectedItem.id}`}> */}
                            <Link>

                {selectedItem.designation}
              </Link>
            </div>
            {uniqueNamelist(selectedItem.designation).map((item, index) => (
              <div className="data__list" key={index}>
                <Link>{item.namelist[0]}</Link>
              </div>
            ))}
          </Box>
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Katalog;
