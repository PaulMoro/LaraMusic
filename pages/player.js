import React from "react";

/* import componenets */
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import MainPlayer from "../components/Player/MainPlayer.js";
import index from "../assets/style/indexStyle";

/* import style */

//import "../assets/style/indexStyle.scss";

/* api */

const homeScreen = () => {
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
};

export default homeScreen;
