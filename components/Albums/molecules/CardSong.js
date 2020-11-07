import React, { useState, useEffect } from 'react';
import { usePlayer } from '../../../contexts/PlayerContext';
import axios from 'axios';
import CardSongStyles from './styles/CardSongStyles';
import playbutton from '../../../assets/img/play.svg';
import { getPlaylist } from '../../../lib/spotifyRequest';

function CardSong() {
  const { setPlayingSong } = usePlayer();
  // console.log(PlayingSong);

  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylist(
      '37i9dQZF1DX5BAPG29mHS8/tracks?offset=0&limit=7'
    );

    const musica = playlist.items;
    // console.log(musica);
    setMusic(musica);
  };

  const onPlay = (id) => {
    // console.log(id);
    setPlayingSong(id);
  };

  return (
    <>
      {music.map((item) => (
        <div className='card__song' key={item.track.id}>
          <div className='card__song--image'>
            <img src={item.track.album.images[0].url} alt='' />
            <span
              className='card__overlay'
              onClick={() => {
                onPlay(item.track.id);
              }}
            >
              <img src={playbutton}></img>
            </span>
          </div>
          <p className='title__song'>{item.track.album.name}</p>
          <p className='artist_name'>{item.track.album.artists[0].name}</p>
        </div>
      ))}
      <style jsx CardSongStyles>
        {CardSongStyles}
      </style>
    </>
  );
}
export default CardSong;
