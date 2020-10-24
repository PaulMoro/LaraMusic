import React from "react";
import "../assets/style/componentStyle/com__Headerpage.scss";
import "../assets/style/componentStyle/global.scss";

import HeaderLinks from "../components/molecules/Mol__HeaderLinks";
// import logoLara from "../assets/img/lara_header.png";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <figure className="header__img__container">
          <img src="" alt="Logo-Lara" />
        </figure>
        <HeaderLinks />
      </div>
    </header>
  );
}
export default Header;
