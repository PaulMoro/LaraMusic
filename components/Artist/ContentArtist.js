import React from "react";
import AlbumStyles from "../Albums/AlbumStyles";
import { Banner } from "./Banner";
function ContentArtist() {
	return (
		<div className='containerContent'>
			<Banner></Banner>
			<style jsx AlbumStyles>
				{AlbumStyles}
			</style>
		</div>
	);
}
export default ContentArtist;
