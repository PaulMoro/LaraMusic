import React from "react";
import Header from "../components/Com__Header";
import Main from "../components/Com_nav.js";
import { Banner } from "../components/ArtistPlaylist/Banner";
import { FilterArtist } from "../components/ArtistPlaylist/FilterArtist";

/* import componenets */

const artist = () => {
	return (
		<div className='lara'>
			<Header />
			<Main />
			<main>
				<Banner />
				<FilterArtist />
			</main>
			<footer>Hi</footer>
		</div>
	);
};

export default artist;
