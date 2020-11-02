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
<<<<<<< HEAD
      <Banner />
=======
      <ContentArtist />
>>>>>>> c2e7f1900f52e9d5c0464fa4a116b680b2244339

      <Play></Play>
    </div>
  );
};

export default artist;
