import React, { useState, useEffect } from "react";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import { getPlaylist } from "../../../lib/spotifyRequest";
import { MillisToMinute } from "../../../lib/formatMinute";
import ContentMusicStyles from "./styles/ContentMusicStyles";

function ContentMusic() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylist(
      "37i9dQZF1DX5BAPG29mHS8/tracks?offset=0&limit=7"
    );
    const musica = playlist.items;
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => (
        <div className="tab__music" key={item.track.id}>
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
          <p className="tab__music__title">{item.track.album.name}</p>
          <p className="tab__music__plays">
            {item.track.duration_ms.toFixed(0)}
          </p>
          <p className="tab__music__time">
            {MillisToMinute(item.track.duration_ms)}
          </p>
          <div className="tab__music__icon">
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
