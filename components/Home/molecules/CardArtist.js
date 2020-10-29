import React, { useEffect, useState } from "react";
import cardArtistStyle from "./styles/CardArtistStyle";

function CardArtist(params) {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/?page=1&count=6"
    );
    const musica = await datos.json();
    setMusic(musica);
  };
  return (
    <>
      {music.map((item) => (
        <div className="card__artist" key={item.id}>
          <img src={item.artwork_url} alt="" />
          <p className="title__song">{item.title}</p>
          <p className="artist_name">{item.user.username}</p>
        </div>
      ))}

      <style jsx cardArtistStyle>
        {cardArtistStyle}
      </style>
    </>
  );
}
export default CardArtist;
