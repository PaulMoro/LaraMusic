import React from "react";
import SectionPopular from "./molecules/SectionPopular.js";
import FeatureTracks from "../Albums/FeatureTracks";
import { useAuth } from "../../contexts/AuthContext";

import { VscEllipsis, VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";

import ListTrackStyle from "./molecules/styles/ListTrackStyle";

const List = ({ title }) => {
	const { user } = useAuth();

	const musiclist = user?.profile?.musiclists ?? [];

	const playlists = musiclist.filter(
		(musiclist) => musiclist.type_list === "playlist"
	);
	console.log(">>>", musiclist);
	const tracks =
		musiclist.find((playlist) => playlist.title === title)?.musictracks ?? [];

	return (
		<main className='Container'>
			<SectionPopular />
			<FeatureTracks />
			<div className='track'>
				<h2>Top Tracks</h2>
				<div className='tab__top'>
					<h4 className='tab__top__number#'>#</h4>
					<h4 className='tab__top__tittel'>Song</h4>
					<h4 className='tab__top__plays'>Artist</h4>
					<h4 className='tab__top__time'>Album</h4>
					<h4 className='tab__top__option'>Time</h4>
					<h4 className='tab__top__option'>Options</h4>
				</div>
				{user &&
					tracks.map((list) => (
						<div className='tab__music'>
							<div className='tab__music__icons'>
								<p>{list.id}</p>
								<div className='icon'>
									<CgPlayButtonO></CgPlayButtonO>
								</div>
								<div className='icon'>
									<VscThumbsup></VscThumbsup>
								</div>
								<div className='icon'>
									<GrAddCircle></GrAddCircle>
								</div>
							</div>

							<p className='tab__music__tittel'>{list.title}</p>
							<p className='tab__music__plays'>{list.album}</p>
							<p className='tab__music__time'>{list.record_company}</p>
							<p>{list.gender}</p>
							<p>{list.views}</p>
							<div className='tab__music__icon'>
								<VscEllipsis></VscEllipsis>
							</div>
						</div>
					))}
				<style jsx ListTrackStyle>
					{ListTrackStyle}
				</style>
			</div>
		</main>
	);
};

export default List;
