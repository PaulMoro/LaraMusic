import React from "react";
import Link from "next/link";

/* import componenets */
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import MainPlayer from "../components/Player/MainPlayer.js";
import Play from "../components/Play/Play";
import AlbumStyles from "../components/Albums/AlbumStyles";

const homeScreen = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen />
      <div className="containerContent">
        <MainPlayer />
      </div>
      <Play></Play>
    </div>
  );
};

export default homeScreen;
