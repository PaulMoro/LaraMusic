import React from "react";
import CardLaraSpec from "./molecules/Mol__CardLaraSpec";
import HomeStyle from "./HomeStyle";
import featureImg from "../../assets/img/hero-cell.png";

function LaraSpecs() {
	return (
		<section className='lara__specs'>
			<div className='container'>
				<div className='lara__specs__description'>
					<div className='description__section'>
						<h1 className='description__title'>
							Listening and watching anytime, anywhere
						</h1>
						<p className='description__p'>
							The artists we represent are one of the most successful in Romania and
							also were a huge breakthrough.
						</p>
					</div>
					<div className='lara__specs__description__cards'>
						<CardLaraSpec></CardLaraSpec>
					</div>
				</div>
				<div className='lara__specs__img'>
					<img src={featureImg} alt='lara-features' />
					<p></p>
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</section>
	);
}
export default LaraSpecs;
