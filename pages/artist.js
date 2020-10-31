import React from "react";
import HeaderHome from "../components/Player/Com__Header";
// import MainHomeScreen from "../components/_app/Main";
import { Banner } from "../components/Artist/Banner";
import NavHomeScreen from "../components/Player/Nav.js";
import Play from "../components/Play/Play";
import ContentArtist from "../components/Artist/ContentArtist";
import { FilterArtist } from "../components/Artist/FilterArtist";

/* import componenets */

const artist = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen></NavHomeScreen>
      {/* <MainHomeScreen /> */}
      <ContentArtist />

      <Play></Play>
    </div>
  );
};

export default artist;
