import React from "react";
import HeaderHome from "../components/Player/Com__Header";
// import MainHomeScreen from "../components/_app/Main";
import { Banner } from "../components/Artist/Banner";
import NavHomeScreen from "../components/Player/Nav.js";

import { FilterArtist } from "../components/Artist/FilterArtist";

/* import componenets */

const artist = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen></NavHomeScreen>
      {/* <MainHomeScreen /> */}
      <Banner />

      <footer>Hi</footer>
    </div>
  );
};

export default artist;
