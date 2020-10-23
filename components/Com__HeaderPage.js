import React from "react";
function Header() {
  return (
    <header class="header">
      <div class="container">
        <figure class="header__img__container">
          <img src="../../assets/img/lara_header.png" alt="Logo-Lara" />
        </figure>
        <div class="header__links">
          <a href="" class="header__link--player">
            Lara Player
          </a>
          <a href="" class="header__link--login">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
