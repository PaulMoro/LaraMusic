import React from "react";
<<<<<<< HEAD
//import HeaderHome from "../components/Com__atAPP/Com__Header";
import MainPlayer from "../components/Player/MainPlayer.js";
=======
import HeaderHome from "../components/Player/Com__Header";
// import MainHomeScreen from "../components/_app/Main";
>>>>>>> fabian
import { Banner } from "../components/Artist/Banner";
import NavHomeScreen from "../components/Player/Nav.js";

import { FilterArtist } from "../components/Artist/FilterArtist";

/* import componenets */

const artist = () => {
<<<<<<< HEAD
	return (
		<div className='lara'>
			{/* <HeaderHome /> */}
			<MainPlayer />
			<Banner />
=======
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen></NavHomeScreen>
      {/* <MainHomeScreen /> */}
      <Banner />
>>>>>>> fabian

      <footer>Hi</footer>
    </div>
  );
};

export default artist;
