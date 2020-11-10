import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { usePlayer } from "../../contexts/PlayerContext";
import { getPlaylist, getSong } from "../../lib/spotifyRequest";

import SongPlayer from "../SongPlayer/SongPlayer";

import ImageSong from "../../../assets/img/song2.png";

import PlayStyles from "../Style/Play/PlaySyles";

function Play() {
	const { song } = usePlayer();
	const [isVisible, setIsVisible] = useState();

	const [currentSong, setCurrentSong] = useState({
		songName: "",
		songArtist: "",
		songUrl: "",
		songImage: "",
		id: "",
		songDuration: "",
	});

	const setSongState = async (song) => {
		setCurrentSong(song);
	};

	if (song !== currentSong) {
		setSongState(song);
	}

	function checkIfIsVisible(path, lisOfPages) {
		const visible = lisOfPages.includes(path);
		setIsVisible(visible);
	}
	const router = useRouter();
	const visibleIn = ["/player", "/artist", "/album", "/listplayer"];

	useEffect(() => {
		checkIfIsVisible(router.pathname, visibleIn);
	}, [router.pathname]);

	if (!isVisible) {
		return null;
	}
	return (
		<div className='songPlayer'>
			<div className='info__song'>
				<img src={song.songImage}></img>
				<div className='artist'>
					<h4>{song.songName}</h4>
					<p>{song.songArtist}</p>
				</div>
			</div>
			<div className='player'>
				<SongPlayer song={song.songUrl} />
			</div>
			<style jsx PlayStyles>
				{PlayStyles}
			</style>
		</div>
	);
}
export default Play;
