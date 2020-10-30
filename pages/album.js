import React from "react";
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import ContentAbum from "../components/Albums/ContentAbum";
function Album() {
  return (
    <div className="lara">
      <HeaderHome></HeaderHome>
      <NavHomeScreen></NavHomeScreen>
      <ContentAbum></ContentAbum>
    </div>
  );
}
export default Album;
