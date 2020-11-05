import React, { useEffect, useState } from "react";
import axios from "axios";
import cardArtistStyle from "./styles/cardArtistStyle";

function CardArtist(params) {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const API_HOST =
    "https://api.spotify.com/v1/playlists/37i9dQZF1DX5BAPG29mHS8/tracks?offset=0&limit=6";

  const obtenerDatos = async () => {
    const res = await axios.get(API_HOST, {
      headers: {
        Authorization:
          "Bearer BQDOHtuxwrN7JW8bmQFW0V7BmVzbQwGry7vzgspw4Qsb-X2tG8neJ4zoaiwpyYsI4BXz76HK9dM1zShwdaY",
      },
    });
    const musica = await res.data.items;
    setMusic(musica);
  };
  return (
    <>
      {music.map((item) => (
        <div className="card__artist" key={item.track.id}>
          <img src={item.track.album.images[0].url} alt="" />
          <p className="title__song">{item.track.album.name}</p>
          <p className="artist_name">{item.track.album.artists[0].name}</p>
        </div>
      ))}

      <style jsx cardArtistStyle>
        {cardArtistStyle}
      </style>
    </>
  );
}
export default CardArtist;
