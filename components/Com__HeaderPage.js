import React from "react";
import "../assets/style/componentStyle/com__Headerpage.scss";
import "../assets/style/componentStyle/global.scss";
// import logoLara from "../assets/img/lara_header.png";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <figure className="header__img__container">
          <img src="" alt="Logo-Lara" />
        </figure>
        <div className="header__links">
          <a href="" className="header__link--player">
            Lara Player
          </a>
          <a href="" className="header__link--login">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
