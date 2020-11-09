import React, { useState, useEffect } from 'react';
import { VscEllipsis, VscThumbsup } from 'react-icons/vsc';
import { GrAddCircle } from 'react-icons/gr';
import { CgPlayButtonO } from 'react-icons/cg';
import { getPlaylistCleaned } from '../../../lib/spotifyRequest';
import { MillisToMinute } from '../../../lib/formatMinute';
import ContentMusicStyles from './styles/ContentMusicStyles';

function ContentMusic() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylistCleaned('37i9dQZF1DX5BAPG29mHS8', 7);
    const musica = playlist;
    setMusic(musica);
    console.log(music);
  };

  return (
    <>
      {music.map((item) => (
        <div className='tab__music' key={item.songId}>
          <div className='tab__music__icons'>
            <p>1</p>
            <div className='icon'>
              <CgPlayButtonO></CgPlayButtonO>
            </div>
            <div className='icon'>
              <VscThumbsup></VscThumbsup>
            </div>
            <div className='icon'>
              <GrAddCircle></GrAddCircle>
            </div>
          </div>
          <p className='tab__music__title'>{item.songName}</p>
          <p className='tab__music__plays'>{item.songPlaysCount}</p>
          <p className='tab__music__time'>{item.songDuration}</p>
          <div className='tab__music__icon'>
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
