import React from "react";
import HeaderHome from "../components/Player/Header";
import NavHomeScreen from "../components/Player/Nav.js";
import Play from "../components/Play/Play";
import ContentArtist from "../components/Artist/ContentArtist";

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
