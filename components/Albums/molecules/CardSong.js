import React, { useState, useEffect } from "react";
import CardSongStyles from "./styles/CardSongStyles";
import img1 from "../../../assets/img/song1.png";
import img2 from "../../../assets/img/song2.png";
import img3 from "../../../assets/img/song3.png";
function CardSong() {
  return (
    <>
      <div className="card__song">
        <img src={img1} alt="" />
        <p className="title__song">I Don’t Care</p>
        <p className="artist_name">Ed Sheeran & Bieber's</p>
      </div>
      <div className="card__song">
        <img src={img2} alt="" />
        <p className="title__song">Old Town Road</p>
        <p className="artist_name">Lil Nas</p>
      </div>
      <div className="card__song">
        <img src={img3} alt="" />
        <p className="title__song">Can't Let Go</p>
        <p className="artist_name">Feydee</p>
      </div>
      <div className="card__song">
        <img src={img1} alt="" />
        <p className="title__song">I Don’t Care</p>
        <p className="artist_name">Ed Sheeran & Bieber's</p>
      </div>
      <div className="card__song">
        <img src={img2} alt="" />
        <p className="title__song">Old Town Road</p>
        <p className="artist_name">Lil Nas</p>
      </div>
      <div className="card__song">
        <img src={img3} alt="" />
        <p className="title__song">Can't Let Go</p>
        <p className="artist_name">Feydee</p>
      </div>
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
}
export default CardSong;
