import React from "react";
import NavHomeScreen from "../components/Player/Nav.js";
import Play from "../components/Play/Play";
import HeaderHome from "../src/components/Player/Header";

const homeScreen = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen />
      <div className="containerContent">{/* <ListPlayer /> */}</div>
      <Play></Play>
    </div>
  );
};

export default homeScreen;
