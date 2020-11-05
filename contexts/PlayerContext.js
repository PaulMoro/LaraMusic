import React, { createContext, useState, useContext } from 'react';

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [song, setSong] = useState({});

  const setPlayingSong = (songID) => {
    setSong(songID);
    console.log(songID);
    return song;
  };

  return (
    <PlayerContext.Provider value={{ setPlayingSong: song }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
