import React, { createContext, useState, useContext } from 'react';

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [songId, setSongId] = useState({});

  const setPlayingSong = async (songID) => {
    setSongId(songID);
    console.log(songID);
    return songId;
  };

  return (
    <PlayerContext.Provider value={{ setPlayingSong, songId }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
