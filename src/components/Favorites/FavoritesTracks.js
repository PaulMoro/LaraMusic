import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import playbutton from "../../../assets/img/play.svg";
import FavoritesStyles from "../Style/Favorites/FavoritesStyles";

function FavoritesTracks() {
	const { user } = useAuth();
	const musiclist = user?.profile?.musiclists ?? [];
	const tracks =
		musiclist.find((playlist) => playlist.type_list === "favourites")
			?.musictracks ?? [];

	return (
		<section className='feature__tracks'>
			<div className='feature_tracks_title'>
				<h1>Featured Tracks</h1>
			</div>
			<div className='card__list'>
				{tracks.map((item) => (
					<div className='card__song' key={item.id}>
						<div className='card__song--image'>
							<img src={item.image_uri} alt={item.title} />
							<span
								className='card__overlay'
								onClick={() => {
									onPlay(item);
								}}
							>
								<img src={playbutton}></img>
							</span>
						</div>
						<p className='title__song'>{item.title}</p>
						<p className='artist_name'>{item.artist}</p>
					</div>
				))}
			</div>
			<style jsx FavoritesStyles>
				{FavoritesStyles}
			</style>
		</section>
	);
}
export default FavoritesTracks;
