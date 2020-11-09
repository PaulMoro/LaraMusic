import React from "react";
import { Banner } from "./Banner";
import AlbumStyles from "../Albums/AlbumStyles";
function ContentArtist() {
  return (
    <div className="containerContent">
      <Banner></Banner>
      <style jsx AlbumStyles>
        {AlbumStyles}
      </style>
    </div>
  );
}
export default ContentArtist;
