import React from "react";
import Link from "next/link";

/* import componenets */
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import MainPlayer from "../components/Player/MainPlayer.js";

/* import style */
import index from "../assets/style/indexStyle";


const homeScreen = () => {
<<<<<<< HEAD
	return (
		<div className='lara'>
			<HeaderHome />
			<NavHomeScreen />
			<MainPlayer />

			<style jsx index>
				{index}
			</style>
		</div>
	);
=======
  return (
    <div className="lara">
      <HeaderHome />
      <NavHomeScreen />
      <MainPlayer />
      <style jsx index>
        {index}
      </style>
    </div>
  );
>>>>>>> fabian
};

export default homeScreen;
