import React from "react";
import AlbumStyles from "./AlbumStyles";
import FeatureTracks from "./FeatureTracks";
import AboutAlbum from "./AboutAlbum";
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
