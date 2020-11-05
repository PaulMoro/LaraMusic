import React from "react";
import Link from "next/link";

/* import componenets */
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import ListPlayer from "../components/Player/MainPlayer.js";
import Play from "../components/Play/Play";
import AlbumStyles from "../components/Albums/AlbumStyles";

const homeScreen = () => {
	return (
		<div className='lara'>
			<HeaderHome />
			<NavHomeScreen />
			<div className='containerContent'>
				<ListPlayer />
			</div>
			<Play></Play>
		</div>
	);
};

export default homeScreen;
