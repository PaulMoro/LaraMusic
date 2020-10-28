import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";

import ListTrackStyle from "./styles/ListTrackStyle";
//import "../../assets/style/moleculStyle/mol__ListTrack.scss";

const ListTrack = () => {
	/* call API */
	const [music, setMusic] = useState([]);
	useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const datos = await fetch(
			"https://api-v2.hearthis.at/feed/popular/?page=1&count=5"
		);
		const musica = await datos.json();
		setMusic(musica);
	};

	return (
		<>
			<div className='track_top'>
				<div className='track_top_detail'>
					<h4 className='track_top_detail#'>#</h4>
					<h4 className='track_top_detailSong'>Song</h4>
					<h4 className='track_top_detailArtist'>Artist</h4>
				</div>
				<div className='track_top_inf'>
					<h4>Daily Plays</h4>
					<h4>Time</h4>
					<h4 className='track_top_infOptions'>Options</h4>
				</div>
			</div>
			{music.map((item) => (
				<div className='track_list'>
					<div className='track_list_detail'>
						<h4 className='track_top_detail#'>1</h4>
						<h4 className='track_top_detailSong'>{item.permalink}</h4>
						<h4 className='track_top_detailArtist'>{item.user.username}</h4>
					</div>
					<div className='track_list_inf'>
						<h4>{item.playback_count}</h4>
						<h4>{item.duration} seg</h4>
						<div className='track_list_infOptions'>
							<img src='' alt='' />
							<img src='' alt='' />
							<img src='' alt='' />
						</div>
					</div>
				</div>
			))}

			<style jsx ListTrackStyle>
				{ListTrackStyle}
			</style>
		</>
	);
};

export default ListTrack;
