import React from 'react';
import { usePlayer } from '../../../contexts/PlayerContext';

const roundPlayButton = (song) => {
  const { setPlayingSong } = usePlayer();

  const onPlay = (song) => {
    setPlayingSong(song);
  };

  return (
    <button
      onClick={() => {
        onPlay(song.song);
      }}
      className='buttons__one'
    >
      Play ►
    </button>
  );
};

export default roundPlayButton;
