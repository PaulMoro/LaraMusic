import React, { useState, useEffect } from "react";
import axios from "axios";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import ContentMusicStyles from "./styles/ContentMusicStyles";
import { CgPlayButtonO } from "react-icons/cg";

function ContentMusic() {
  const id = 1;
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
    setMusic(musica);
  };
  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }

  return (
    <>
      {music.map((item) => (
        <div className="tab__music" key={item.track.id}>
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
          <p>{item.track.album.name}</p>
          <p>{item.track.album.name}</p>
          <p>{time_convert(item.track.album.name)}</p>
          <div className="icon">
            <VscEllipsis></VscEllipsis>
          </div>
        </div>
      ))}

      <style jsx ContentMusicStyles>
        {ContentMusicStyles}
      </style>
    </>
  );
}
export default ContentMusic;
