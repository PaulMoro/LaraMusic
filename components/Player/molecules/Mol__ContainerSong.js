import React, { useState, useEffect } from "react";
import ContainerSongStyle from "./styles/ContainerSongStyle";
import { getSongs } from "../../../lib/hearthisRequest";

const ContainerSong = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const songs = await getSongs(5);
    setMusic(songs.data);
  };

  return (
    <div className="song" key={item.id}>
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
