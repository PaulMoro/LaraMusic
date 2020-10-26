import React from "react";
import HomeStyle from "./HomeStyle";

import CardArtist from "./molecules/Mol__CardArtist";

function TopArtist() {
	return (
		<section className='artist'>
			<div className='container'>
				<div className='artist__info'>
					<h1>New artists</h1>
					<p>
						The artists we represent are one of the most successful in Romania and
						also were a huge breakthrough.
					</p>
				</div>
				<div className='grid__container__artist'>
					<CardArtist></CardArtist>
					{/* <div className="card__artist">
            <img src="../../assets/img/song1.png" alt="" />
            <p className="title__song">I Don’t Care</p>
            <p className="artist_name">Ed Sheeran & Bieber's</p>
          </div>
          <div className="card__artist">
            <img src="../../assets/img/song2.png" alt="" />
            <p className="title__song">Old Town Road</p>
            <p className="artist_name">Lil Nas</p>
          </div>
          <div className="card__artist">
            <img src="../../assets/img/song3.png" alt="" />
            <p className="title__song">Can't Let Go</p>
            <p className="artist_name">Feydee</p>
          </div>
          <div className="card__artist">
            <img src="../../assets/img/song1.png" alt="" />
            <p className="title__song">I Don’t Care</p>
            <p className="artist_name">Ed Sheeran & Bieber's</p>
          </div>
          <div className="card__artist">
            <img src="../../assets/img/song2.png" alt="" />
            <p className="title__song">Old Town Road</p>
            <p className="artist_name">Lil Nas</p>
          </div>
          <div className="card__artist">
            <img src="../../assets/img/song3.png" alt="" />
            <p className="title__song">Can't Let Go</p>
            <p className="artist_name">Feydee</p>
          </div> */}
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</section>
	);
}
export default TopArtist;
