import React from "react";
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import Play from "../src/components/Play/Play";
import ContentArtist from "../src/components/Artist/ContentArtist";

const artist = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen></NavHomeScreen>
      <ContentArtist />
      <Play></Play>
    </div>
  );
};

export default artist;
