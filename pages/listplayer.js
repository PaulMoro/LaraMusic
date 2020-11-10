
import React from 'react';
import Link from 'next/link';
/* import componenets */
import HeaderHome from '../components/Player/Header';
import NavHomeScreen from '../components/Player/Nav.js';
// import ListPlayer from "../components/Player/ListPlayer";
import Play from '../components/Play/Play';
import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import ListPlayer from "../src/components/Player/ListPlayer";
import Play from "../src/components/Play/Play";

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
