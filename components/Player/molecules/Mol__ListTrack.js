import React, { useState, useEffect } from "react";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import { getSongs } from "../../../lib/hearthisRequest";
import { SecondToMinutes } from "../../../lib/formatMinute";
import ListTrackStyle from "./styles/ListTrackStyle";
const ListTrack = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const songs = await getSongs(5);
    setMusic(songs.data);
  };

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
          <p className="tab__music__tittel">{item.title.substr(0, 19)}</p>
          <p className="tab__music__plays">{item.playback_count}</p>
          <p className="tab__music__time">{SecondToMinutes(item.duration)}</p>
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
