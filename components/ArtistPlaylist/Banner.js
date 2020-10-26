import React from "react";

export const Banner = () => {
	return (
		<section className='banner'>
			<div className='banner__toplist'>
				<img className='banner__toplist__image' src='../images/frame.png' alt />
				<div className='banner__toplist__info'>
					<div className='banner__toplist__info-description'>
						<img src='../images/Ellipse.png' alt />
						<div className='banner__toplist__info-description--desc'>
							<h2>artist</h2>
							<div className='info-group'>
								<div className='info-item'>
									<p className='title'> followers</p>
									<p className='number'>50.55</p>
								</div>
								<div className='info-item'>
									<p className='title'>followers</p>
									<p className='number'>50.55</p>
								</div>
								<div className='info-item'>
									<p className='title'>followers</p>
									<p className='number'>50.55</p>
								</div>
							</div>
						</div>
					</div>
					<div className='banner__toplist__info-list'>
						<ol>
							<li>
								{" "}
								<p> Tracks of my Tears </p>{" "}
							</li>
							<li>
								{" "}
								<p> Only You </p>{" "}
							</li>
							<li>
								{" "}
								<p> What Tyeh Say</p>{" "}
							</li>
							<li>
								{" "}
								<p>Sittin on the dock of the bay</p>{" "}
							</li>
							<li>
								{" "}
								<p>When a man loves a woman</p>{" "}
							</li>
							<li>
								<p>Walk this way</p>
							</li>
							<li>
								{" "}
								<p>Me in honey</p>
							</li>
							<li>
								{" "}
								<p>Fool in a rain</p>
							</li>
						</ol>
						<div className='buttons'>
							<button className='buttons__single buttons__single-play'>
								Play All
							</button>
							<button className='buttons__single buttons__single-share' />
						</div>
					</div>
				</div>
			</div>
			<div className='banner__feature feature1'>
				<img src='../images/frame.png' alt />
				<span className='banner__feature-background' />
				<span className='banner__feature-label' />
			</div>
			<div className='banner__feature feature2'>
				<img src='../images/frame.png' alt />
				<span className='banner__feature-background' />
				<span className='banner__feature-label' />
			</div>
		</section>
	);
};
