import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import { useAuth } from "../../../contexts/AuthContext";

import ListTrackStyle from "./styles/ListTrackStyle";

const FromList = () => {
	const { user } = useAuth();

	const Tracks = user.profile.musiclists[0].musictracks;

	const { profile: { musiclists: { musictracks = {} } } = {} } = user;

	console.log(musictracks);

	/* call API */
	// const [music, setMusic] = useState([]);
	// useEffect(() => {
	// 	obtenerDatos();
	// }, []);

	// const obtenerDatos = async () => {
	// 	const datos = await fetch(
	// 		"https://api-v2.hearthis.at/feed/popular/?page=1&count=5"
	// 	);
	// 	const music = await datos.json();
	// 	setMusic(music);
	// };
	// function time_convert(num) {
	// 	var hours = Math.floor(num / 60);
	// 	var minutes = num % 60;
	// 	return hours + ":" + minutes;
	// }

	return (
		<div className='track'>
			<h2>Top Tracks</h2>
			<div className='track_top'>
				<div className='track_top_detail'>
					<h4 className='track_top_detail#'>#</h4>
					<h4 className='track_top_detailSong'>Song</h4>
					<h4 className='track_top_detailArtist'>Artist</h4>
				</div>
				<div className='track_top_inf'>
					<h4>Album</h4>
					<h4>Time</h4>
					<h4 className='track_top_infOptions'>Options</h4>
				</div>
			</div>
			{user &&
				Tracks.map((item) => (
					<div className='tab__music'>
						<p>{item.id}</p>
						<div className='icon'>
							<CgPlayButtonO></CgPlayButtonO>
						</div>

						<p>{item.title}</p>
						<p>{item.album}</p>
						<p>{item.record_company}</p>
						<p>{item.gender}</p>
						<p>{item.views}</p>
						<div className='icon'>
							<VscEllipsis></VscEllipsis>
						</div>
						<div className='icon'>
							<VscThumbsup></VscThumbsup>
						</div>
						<div className='icon'>
							<GrAddCircle></GrAddCircle>
						</div>
					</div>
				))}
			<style jsx ListTrackStyle>
				{ListTrackStyle}
			</style>
		</div>
	);
};

export default FromList;
