import React from "react";
import AlbumStyles from "../Albums/AlbumStyles";
import ListTrack from "./molecules/Mol__ListTrack";
/* import ContainerSong from "./molecules/Mol__ContainerSong.js"; */
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";

import mainStyle from "./styles/mainStyle";

const MainPlayer = () => {
<<<<<<< HEAD
  return (
    <>
      <SectionPopular />
      <ContainerSong />
      <ListTrack />
    </>
  );
=======
	return (
		<main className='Container'>
			<SectionPopular/>
			<article>
				<FeatureTracks />
				<ListTrack />
			</article>

			<style jsx mainStyle>
				{mainStyle}
			</style>
		</main>
	);
>>>>>>> paul
};

export default MainPlayer;
