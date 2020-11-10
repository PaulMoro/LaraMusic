import React, { useEffect, useState } from 'react';

import { getPlaylistWithLimit } from '../../../lib/spotifyRequest';

import cardArtistStyle from '../../Style/Home/molecules/cardArtistStyle';

function CardArtist() {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylistWithLimit('37i9dQZF1DX5BAPG29mHS8', 6);

    const musica = playlist;
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => (
        <div className='card__artist' key={item.track.id}>
          <img src={item.track.album.images[0].url} alt='' />
          <p className='title__song'>{item.track.album.name}</p>
          <p className='artist_name'>{item.track.album.artists[0].name}</p>
        </div>
      ))}

      <style jsx cardArtistStyle>
        {cardArtistStyle}
      </style>
    </>
  );
}
export default CardArtist;
