import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";


import "../../assets/style/moleculStyle/mol__ListTrack.scss";

const ListTrack = () => {
  /* call API */
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/new/?page=1&count=5"
    );
    const musica = await datos.json();
    setMusic(musica);
  };


  return (
    <div>
      <div class="track_top">
        <div class="track_top_detail">
          <h4 class="track_top_detail#">#</h4>
          <h4 class="track_top_detailSong">Song</h4>
          <h4 class="track_top_detailArtist">Artist</h4>
        </div>
        <div class="track_top_inf">
          <h4>Daily Plays</h4>
          <h4>Time</h4>
          <h4 class="track_top_infOptions">Options</h4>
        </div>
      </div>
      {music.map((item) => (
      <div class="track_list">
        <img class="track_cover" href={item.artwork_url}/>
        <span class="track_data">{item.permalink}</span>
        <div class="player-component">
          <div class="play-button paused" data-tip="Preview" data-place="top" currentitem="true">
            <div>
              <svg class="progress_c" width="100%" height="100%" viewBox="0 0 120 120">
              <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="8"></circle>
              <circle class="progress__value"></circle>
              </svg>
            </div>
          </div>
          <audio src="https://p.scdn.co/mp3-preview/d9b90990dab9d8376d05c5d4a6b7ac3e99c03763?cid=898cb61111804d2c8bf225394482e209" preload="none"></audio> 
        </div>
        <a href="/#/create/3eekarcy7kvN4yt5ZFzltW?trackSource=top_tracks">
        Create playlist
        </a>
      </div>
      ))}
    </div>
  );
};


export default ListTrack