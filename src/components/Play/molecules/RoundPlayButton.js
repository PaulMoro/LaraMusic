import React from 'react';
import { usePlayer } from '../../../contexts/PlayerContext';
import { CgPlayButtonO } from 'react-icons/cg';

const roundPlayButton = (song) => {
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    setPlayingSong(song);
  };

  return (
    <div className='icon'>
      <CgPlayButtonO
        onClick={() => {
          onPlay(song.song);
        }}
      ></CgPlayButtonO>
    </div>
  );
};

export default roundPlayButton;
