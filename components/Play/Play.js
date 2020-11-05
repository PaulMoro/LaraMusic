import React from 'react';
import PlayStyles from './PlaySyles';
import ImageSong from '../../assets/img/song2.png';
import SongPlayer from '../SongPlayer/SongPlayer';
function Play() {
  return (
    <div className='songPlayer'>
      <div className='info__song'>
        <img src={ImageSong}></img>
        <div className='artist'>
          <h4>Song Title</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className='player'>
        <SongPlayer />
      </div>
      <style jsx PlayStyles>
        {PlayStyles}
      </style>
    </div>
  );
}
export default Play;
