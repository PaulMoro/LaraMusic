import React, { createContext, useState, useContext } from 'react';

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [song, setSong] = useState({});

  const setPlayingSong = async (newSong) => {
    setSong(newSong);
    return newSong;
  };

  return (
    <PlayerContext.Provider value={{ setPlayingSong, song }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
