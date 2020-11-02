import React from "react";
import HomeStyle from "./HomeStyle";
import HeaderLinks from "./molecules/HeaderLinks";
import logo from "../../assets/img/lara_header.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <figure className="header__img__container">
          <a href="/">
            <img src={logo} alt="Logo-Lara" />
          </a>
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
