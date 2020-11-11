import React from "react";
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import Favorites from "../src/components/Favorites";
import Play from "../src/components/Play/Play";

function Favorite() {
  return (
    <div className="lara">
      <HeaderHome></HeaderHome>
      <NavHomeScreen></NavHomeScreen>
      <Favorites />
      <Play></Play>
    </div>
  );
}
export default Favorite;
