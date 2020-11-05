import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSongStyles from "./styles/CardSongStyles";
import playbutton from "../../../assets/img/play.svg";
function CardSong() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const API_HOST =
    "https://api.spotify.com/v1/playlists/37i9dQZF1DX5BAPG29mHS8/tracks?offset=0&limit=7";

  const obtenerDatos = async () => {
    const res = await axios.get(API_HOST, {
      headers: {
        Authorization:
          "Bearer BQDOHtuxwrN7JW8bmQFW0V7BmVzbQwGry7vzgspw4Qsb-X2tG8neJ4zoaiwpyYsI4BXz76HK9dM1zShwdaY",
      },
    });
    const musica = await res.data.items;
    // console.log(musica);
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => (
        <div className="card__song" key={item.track.id}>
          <div className="card__song--image">
            <img src={item.track.album.images[0].url} alt="" />
            <span className="card__overlay">
              <img src={playbutton}></img>
            </span>
          </div>
          <p className="title__song">{item.track.album.name}</p>
          <p className="artist_name">{item.track.album.artists[0].name}</p>
        </div>
      ))}
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
}
export default CardSong;
