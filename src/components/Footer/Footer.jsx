import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <div className="footer__page">
          <HomeIcon
            sx={{
              "&:hover": { color: "royalblue" },
              color: " rgb(117, 149, 254)",
              fontSize: "40px",
            }}
          />
          <p>Asosiy</p>
        </div>
      </NavLink>

      <NavLink to="katalog">
        <div className="footer__page">
          <ManageSearchIcon
            sx={{
              "&:hover": { color: "royalblue" },
              color: " rgb(117, 149, 254)",
              fontSize: "40px",
            }}
          />
          <p>Katalog</p>
        </div>
      </NavLink>
      <NavLink to={"/savat"}>
        <div className="footer__page">
          <LocalMallIcon
            sx={{
              "&:hover": { color: "royalblue" },
              color: " rgb(117, 149, 254)",
              fontSize: "40px",
            }}
          />
          <p>Savat</p>
        </div>
      </NavLink>

      <NavLink to={"/login"}>
        <div className="footer__page">
          <PermIdentityIcon
            sx={{
              "&:hover": { color: "royalblue" },
              color: " rgb(117, 149, 254)",
              fontSize: "40px",
            }}
          />
          <p>Kabinet</p>
        </div>
      </NavLink>
    </footer>
  );
};

export default Footer;
