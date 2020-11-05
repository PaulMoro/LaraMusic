import React from "react";
import AlbumStyles from "../Albums/AlbumStyles";
import FromList from "./molecules/FromList";
import ContainerSong from "./molecules/Mol__ContainerSong.js";
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";

import mainStyle from "./styles/mainStyle";

const MainPlayer = () => {
	return (
		<main className='Container'>
			<SectionPopular />
			<article>
				<FeatureTracks />
				<FromList />
			</article>

			<style jsx mainStyle>
				{mainStyle}
			</style>
		</main>
	);
};

export default MainPlayer;
