import React from "react";
//import HeaderHome from "../components/Com__atAPP/Com__Header";
import MainPlayer from "../components/Player/MainPlayer.js";
import { Banner } from "../components/Artist/Banner";
import { FilterArtist } from "../components/Artist/FilterArtist";

/* import componenets */

const artist = () => {
	return (
		<div className='lara'>
			{/* <HeaderHome /> */}
			<MainPlayer />
			<Banner />

			<footer>Hi</footer>
		</div>
	);
};

export default artist;
