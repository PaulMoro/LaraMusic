import React from "react";

import ListTrack from "./molecules/Mol__ListTrack";
import ContainerSong from "./molecules/Mol__ContainerSong.js";
import SectionPopular from "./molecules/SectionPopular.js";

import mainStyle from "./styles/mainStyle";


const MainPlayer = () => {
	return (
		<main className='Container'>
			<SectionPopular/>
			<article>
				<ContainerSong />
				<ListTrack />
			</article>

			<style jsx mainStyle>
				{mainStyle}
			</style>
		</main>
	);
};

export default MainPlayer;
