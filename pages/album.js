import React from "react";
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import FeatureTracks from "../components/Albums/FeatureTracks";
import AboutAlbum from "../components/Albums/AboutAlbum";
function Album() {
  return (
    <div className="lara">
      <HeaderHome></HeaderHome>
      <NavHomeScreen></NavHomeScreen>
      <FeatureTracks></FeatureTracks>
      <AboutAlbum></AboutAlbum>
    </div>
  );
}
export default Album;
