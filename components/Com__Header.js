import React from "react";

import "../assets/style/componentStyle/com__header.scss";

const Header = () => {
  return (
    <header>
    <div className="searchBar">
      <img src="../assets/img/search-24px.svg" alt="" srcset=""/>
      <input type="text" name="" id=""/>
    </div>
    <ul>
      <li className="iconsTop">
        <img src="../assets/img/radio.png" alt="radio"/>
      </li>
      <li className="iconsTop">
        <img src="../assets/img/campana.png" alt="bell"/>
      </li>
      <li className="userInf">
        <img src="../assets/img/user.jpg" alt=""/>
        <div className="userInf__prop">
          <h4>Fulanita Roquera</h4>
          <div className="userInf__prop--state">
            <img src="../assets/img/corona.png" alt=""/>
            <p>Premium</p>
          </div>
        </div>
      </li>
    </ul>
  </header>
  );
};

export default Header