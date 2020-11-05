import React from 'react';
import Link from 'next/link';

/* import componenets */
import HeaderHome from '../components/Player/Com__Header';
import NavHomeScreen from '../components/Player/Nav.js';
import MainPlayer from '../components/Player/MainPlayer.js';
// import Play from "../components/Play/Play";
import AlbumStyles from '../components/Albums/AlbumStyles';

<<<<<<< HEAD
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
=======
const homeScreen = () => {
	return (
		<div className='lara'>
			<HeaderHome />
			<NavHomeScreen />
			<div className='containerContent'>
				<MainPlayer />
			</div>
			<Play></Play>
		</div>
	);
>>>>>>> 33b47ef99234aa54c15ac9fa753cda6be987a98c
};

export default homeScreen;
