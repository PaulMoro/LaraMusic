import React from "react";
import HomeStyle from "./HomeStyle";
import logo from "../../assets/img/lara_header.png";

import HeaderLinks from "./molecules/HeaderLinks";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <figure className="header__img__container">
          <img src={logo} alt="Logo-Lara" />
        </figure>
        <HeaderLinks />
      </div>
      <style jsx HomeStyle>
        {HomeStyle}
      </style>
    </header>
  );
}
export default Header;
