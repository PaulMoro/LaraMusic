import React from "react";

import "../assets/style/componentStyle/com__HeaderProfile.scss";

const HeaderProfile = () => {
  return (
    <header>
    <img src="../assets/img/lara_header.png" alt=""/>
    <div className="perfil">
      <img src="../assets/img/user.jpg" alt=""/>
      <div >
        <h4>Anna Fernandez</h4>
        <p>Log Out</p>
      </div>
    </div>
  </header>
  );
};

export default HeaderProfile