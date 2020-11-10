import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
/* import componenets */
import HeaderHome from '../components/Player/Header';
import NavHomeScreen from '../components/Player/Nav.js';
// import ListPlayer from "../components/Player/ListPlayer";
import Play from '../components/Play/Play';
=======
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import ListPlayer from "../src/components/Player/ListPlayer";
import Play from "../src/components/Play/Play";
>>>>>>> 189fd47bbb4b13f13dadabed52caad9448aba932

const homeScreen = () => {
  return (
    <div className='lara'>
      <HeaderHome />
      <NavHomeScreen />
      <div className='containerContent'>{/* <ListPlayer /> */}</div>
      <Play></Play>
    </div>
  );
};

export default homeScreen;
