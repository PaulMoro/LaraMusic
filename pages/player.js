import React from 'react';
import Link from 'next/link';

/* import componenets */
import HeaderHome from '../components/Player/Com__Header';
import NavHomeScreen from '../components/Player/Nav.js';
import MainPlayer from '../components/Player/MainPlayer.js';
// import Play from "../components/Play/Play";
import AlbumStyles from '../components/Albums/AlbumStyles';

const homeScreen = (props) => {
  const { authenticated } = props;
  return (
    <div className='lara'>
      <HeaderHome authenticated={authenticated} />
      <NavHomeScreen />
      <div className='containerContent'>
        <MainPlayer />
      </div>
    </div>
  );
};

export default homeScreen;
