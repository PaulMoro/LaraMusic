import React from "react";
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav";
import MainPlayer from "../src/components/Player/MainPlayer.js";

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
