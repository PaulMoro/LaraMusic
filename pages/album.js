import React from "react";
import HeaderHome from "../components/Player/Header";
import NavHomeScreen from "../components/Player/Nav.js";
import ContentAbum from "../components/Albums/ContentAbum";
import Play from "../components/Play/Play";
function Album() {
  return (
    <div className="lara">
      <HeaderHome></HeaderHome>
      <NavHomeScreen></NavHomeScreen>
      <ContentAbum></ContentAbum>
      <Play></Play>
    </div>
  );
}
export default Album;
