import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";

import ListTrackStyle from "./styles/ListTrackStyle";
//import "../../assets/style/moleculStyle/mol__ListTrack.scss";

const ListTrack = () => {
  /* call API */
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/popular/?page=1&count=5"
    );
    const music = await datos.json();
    setMusic(music);
  };
  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }

  return (
    <div className="track">
      <h2>Top Tracks</h2>
      <div className="tab__top">
          <p className="tab__top__number">#</p>
          <p className="tab__top__tittel">tittel</p>
          <p className="tab__top__plays">Daily plays</p>
          <p className="tab__top__time">Time</p>
          <p className="tab__top__option">Options</p>
      </div>
      {music.map((item) => (
        <div className="tab__music">
          <div className="tab__music__icons">
            <p>1</p>
            <div className="icon">
              <CgPlayButtonO></CgPlayButtonO>
            </div>
            <div className="icon">
              <VscThumbsup></VscThumbsup>
            </div>
            <div className="icon">
              <GrAddCircle></GrAddCircle>
            </div>
          </div>
          <p className="tab__music__tittel">{item.title.substr(0, 12)}</p>
          <p className="tab__music__plays">{item.playback_count}</p>
          <p className="tab__music__time">{time_convert(item.duration)}</p>
          <div className="tab__music__icon">
            <VscEllipsis></VscEllipsis>
          </div>
        </div>
      ))}

      <style jsx ListTrackStyle>
        {ListTrackStyle}
      </style>
    </div>
  );
};

export default ListTrack;
