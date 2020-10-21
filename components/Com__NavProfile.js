import React from "react";

import "../assets/style/componentStyle/com__NavProfile.scss";

const NavProfile = () => {
  return (
  <nav>
  <h2>Profile settings</h2>
    <div className="menu">
      <a href="#" class="menu_actual">Account</a>
      <a href="#" class="menu_noActual">Your plan</a>
      <a href="#" class="menu_noActual">Password</a>
    </div>
  </nav>
  );
};

export default NavProfile