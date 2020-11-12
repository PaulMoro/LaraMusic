import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePlayer } from '../../contexts/PlayerContext';
import SongPlayer from '../SongPlayer/SongPlayer';
import PlayStyles from '../Style/Play/PlaySyles';

function Play() {
  const { song } = usePlayer();
  const [isVisible, setIsVisible] = useState();

  const [currentSong, setCurrentSong] = useState({
    title: '',
    artist: '',
    track_uri: '',
    image_uri: '',
    id: '',
    length: '',
    views: '',
    fuente: '',
  });

  const setSongState = async (song) => {
    setCurrentSong(song);
  };

  if (song !== currentSong) {
    setSongState(song);
  }

  function checkIfIsVisible(path, lisOfPages) {
    const visible = lisOfPages.includes(path);
    setIsVisible(visible);
  }
  const router = useRouter();
  const visibleIn = [
    '/player',
    '/artist',
    '/album',
    '/favorites',
    '/playlist/[title]',
  ];

  useEffect(() => {
    checkIfIsVisible(router.pathname, visibleIn);
  }, [router.pathname]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className='songPlayer'>
      <div className='info__song'>
        <img src={song.image_uri}></img>
        <div className='artist'>
          <h4>{song.title}</h4>
          <p>{song.artist}</p>
        </div>
      </div>
      <div className='player'>
        <SongPlayer song={song.track_uri} />
      </div>
      <style jsx PlayStyles>
        {PlayStyles}
      </style>
    </div>
  );
}
export default Play;
