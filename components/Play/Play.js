import React, { useState, useEffect } from 'react';
import PlayStyles from './PlaySyles';
import { usePlayer } from '../../contexts/PlayerContext';
import ImageSong from '../../assets/img/song2.png';
import SongPlayer from '../SongPlayer/SongPlayer';
import { getPlaylist, getSong } from '../../lib/spotifyRequest';
import { useRouter } from 'next/router';

function Play() {
  const { songId } = usePlayer();
  const [isVisible, setIsVisible] = useState();

  const [song, setSong] = useState({
    songName: '',
    songArtist: '',
    songUrl: '',
    songImage: '',
    id: '',
  });

  const setSongState = async (songId) => {
    if (Object.keys(songId).length > 0) {
      const song = await getSong(songId);
      if (song.preview_url) {
        setSong({
          songName: song.name,
          songArtist: song.artists[0].name,
          songUrl: song.preview_url,
          songImage: song.album.images[0].url,
          id: songId,
        });
      } else {
        console.error('Error, this song do not haver a url preview');
      }
    }
  };

  if (songId !== song.id) {
    setSongState(songId);
  }

  function checkIfIsVisible(path, lisOfPages) {
    const visible = lisOfPages.includes(path);
    setIsVisible(visible);
    console.log('>>>', { visible });
  }
  const router = useRouter();
  const visibleIn = ['/player', '/artist', '/album'];

  useEffect(() => {
    checkIfIsVisible(router.pathname, visibleIn);
  }, [router.pathname]);

  console.log('>>>', { isVisible });
  if (!isVisible) {
    return null;
  }
  return (
    <div className='songPlayer'>
      <div className='info__song'>
        <img src={song.songImage}></img>
        <div className='artist'>
          <h4>{song.songName}</h4>
          <p>{song.songArtist}</p>
        </div>
      </div>
      <div className='player'>
        <SongPlayer song={song.songUrl} />
      </div>
      <style jsx PlayStyles>
        {PlayStyles}
      </style>
    </div>
  );
}
export default Play;
