import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";

import ContainerSongStyle from "./styles/ContainerSongStyle";
//import "../../assets/style/moleculStyle/mol_containerSong.scss";

const ContainerSong = () => {
  /* call API */
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/?page=1&count=6"
    );
    const music = await datos.json();
    setMusic(music);
  };

  return (
    <div className="song">
      <h2 className="song__tittle">Featured Tracks</h2>
      {music.map((item) => (
        <div>
          <div id="song__item">
            <img src={item.artwork_url} alt="" />
            <h4>{item.title}</h4>
            <p>{item.user.username}</p>
          </div>
        </div>
      ))}

      <style jsx ContainerSongStyle>
        {ContainerSongStyle}
      </style>
    </div>
  );
};

export default ContainerSong;
