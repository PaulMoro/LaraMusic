import React, { useState, useEffect } from 'react';

import { usePlayer } from '../../../contexts/PlayerContext';

import { VscEllipsis, VscThumbsup } from 'react-icons/vsc';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { CgPlayButtonO } from 'react-icons/cg';

import { getPlaylist } from '../../../lib/hearThisAtRequest';

import ListTrackStyle from '../../Style/Player/molecules/ListTrackStyle';

const ListTrack = () => {
  const { setPlayingSong } = usePlayer();

  /* call API */
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const music = await getPlaylist('/feed/popular', 5);

    setMusic(music);
    console.log(music);
  };

  const onPlay = (song) => {
    // console.log(id);
    setPlayingSong(song);
  };

  return (
    <div className='track'>
      <h2>Top Tracks</h2>
      <div className='tab__top'>
        <p className='tab__top__number'>#</p>
        <p className='tab__top__tittel'>title</p>
        <p className='tab__top__plays'>Daily plays</p>
        <p className='tab__top__time'>Time</p>
        <p className='tab__top__option'>Options</p>
      </div>
      {music.map((item) => (
        <div className='tab__music'>
          <div className='tab__music__icons'>
            <p>1</p>
            <div className='icon'>
              <CgPlayButtonO
                onClick={() => {
                  onPlay(item);
                }}
              ></CgPlayButtonO>
            </div>
            <div className='icon'>
              <FaRegThumbsUp></FaRegThumbsUp>
            </div>
            <div className='icon'>
              <GrAddCircle></GrAddCircle>
            </div>
          </div>
          <p className='tab__music__tittel'>{item.songName.substr(0, 12)}</p>
          <p className='tab__music__plays'>{item.songPlaysCount}</p>
          <p className='tab__music__time'>{item.songDuration}</p>
          <div className='tab__music__icon'>
            <VscEllipsis></VscEllipsis>
          </div>
        </div>
      ))}

      <style jsx ListTrackStyle>
        {ListTrackStyle}
      </style>
    </div>
  );
};

export default ListTrack;
