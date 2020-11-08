import React, { useState, useEffect } from "react";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import { useAuth } from "../../../contexts/AuthContext";

import ListTrackStyle from "./styles/ListTrackStyle";

const FromList = () => {
  const { user } = useAuth();

  const Tracks = user.profile.musiclists[0].musictracks;

  const { profile: { musiclists: { musictracks = {} } } = {} } = user;

  console.log(musictracks);

  return (
    <div className="track">
      <h2>Top Tracks</h2>
      <div className="tab__top">
        <h4 className="tab__top__number#">#</h4>
        <h4 className="tab__top__tittel">Song</h4>
        <h4 className="tab__top__plays">Artist</h4>
        <h4 className="tab__top__time">Album</h4>
        <h4 className="tab__top__option">Time</h4>
        <h4 className="tab__top__option">Options</h4>
      </div>
      {user &&
        Tracks.map((item) => (
          <div className="tab__music">
            <div className="tab__music__icons">
              <p>{item.id}</p>
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

            <p className="tab__music__tittel">{item.title}</p>
            <p className="tab__music__plays">{item.album}</p>
            <p className="tab__music__time">{item.record_company}</p>
            <p>{item.gender}</p>
            <p>{item.views}</p>
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

export default FromList;
