import React from "react";
import FeatureTracks from "./FeatureTracks";
import AboutAlbum from "./AboutAlbum";
import AlbumStyles from "../Style/Albums/AlbumStyles";

function ContentAlbum() {
  return (
    <div className="containerContent">
      <FeatureTracks></FeatureTracks>
      <AboutAlbum></AboutAlbum>
      <style jsx AlbumStyles>
        {AlbumStyles}
      </style>
    </div>
  );
}
export default ContentAlbum;
