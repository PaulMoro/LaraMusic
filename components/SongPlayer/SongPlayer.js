import React from 'react';
import PlayStyles from './SongPlayerStyles';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ImageSong from '../../assets/img/song2.png';
function SongPlayer() {
  return (
    <>
      <div className='player'>
        <AudioPlayer
          src='https://filesamples.com/samples/audio/mp3/sample1.mp3'
          layout='horizontal-reverse'
        />
      </div>
      <style jsx PlayStyles>
        {PlayStyles}
      </style>
    </>
  );
}
export default SongPlayer;
