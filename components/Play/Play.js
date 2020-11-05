import React, { useState, useEffect } from 'react';
import PlayStyles from './PlaySyles';
import ImageSong from '../../assets/img/song2.png';
import SongPlayer from '../SongPlayer/SongPlayer';
import { getPlaylist, getSong } from '../../lib/spotifyRequest';
function Play() {
  const [song, setSong] = useState({
    songName: '',
    songArtist: '',
    songUrl: '',
    songImage: '',
  });

  useEffect((songID) => {
    const getToken = async () => {
      const playlist = await getPlaylist('37i9dQZF1DX5BAPG29mHS8');
      const songID = playlist.tracks.items[0].track.id;
      const song = await getSong(songID);
      setSong({
        songName: song.name,
        songArtist: song.artists[0].name,
        songUrl: song.preview_url,
        songImage: song.album.images[0].url,
      });
    };
    getToken();
  }, []);

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
