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
      <div className="track_top">
        <div className="track_top_detail">
          <h4 className="track_top_detail#">#</h4>
          <h4 className="track_top_detailSong">Song</h4>
          <h4 className="track_top_detailArtist">Artist</h4>
        </div>
        <div className="track_top_inf">
          <h4>Daily Plays</h4>
          <h4>Time</h4>
          <h4 className="track_top_infOptions">Options</h4>
        </div>
      </div>
      {music.map((item) => (
        <div className="tab__music">
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
          <p>{item.title.substr(1, 7)}</p>
          <p>{item.playback_count}</p>
          <p>{time_convert(item.duration)}</p>
          <div className="icon">
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
