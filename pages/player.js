import React from "react";
import HeaderHome from "../components/Player/Header";
import NavHomeScreen from "../components/Player/Nav.js";
import MainPlayer from "../components/Player/MainPlayer.js";

const homeScreen = (props) => {
  const { authenticated } = props;
  return (
    <div className="lara">
      <HeaderHome authenticated={authenticated} />
      <NavHomeScreen />
      <div className="containerContent">
        <MainPlayer />
      </div>
    </div>
  );
};

export default homeScreen;
