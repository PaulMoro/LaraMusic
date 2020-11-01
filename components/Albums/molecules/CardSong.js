import React, { useState, useEffect } from "react";
import CardSongStyles from "./styles/CardSongStyles";
import playbutton from "../../../assets/img/play.svg";
function CardSong() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/?page=2&count=7"
    );
    const musica = await datos.json();
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => (
        <div className="card__song" key={item.id}>
          <div className="card__song--image">
            <img src={item.artwork_url} alt="" />
            <span className="card__overlay">
              <img src={playbutton}></img>
            </span>
          </div>
          <p className="title__song">{item.title}</p>
          <p className="artist_name">{item.user.username}</p>
        </div>
      ))}
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
}
export default CardSong;
