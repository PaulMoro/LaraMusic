import React, { useState, useEffect } from "react";
import HomeStyle from "../Home/HomeStyle";
import WellcomeImg from "../../assets/img/wellcome.jpg";
import Link from "next/link";

export const Wellcome = () => {
	const [user, setUser] = useState({});
	let userData = "";
	useEffect(() => {
		userData = localStorage.getItem("userData");
		setUser(JSON.parse(userData));
	}, []);

	return (
		<section className='hero'>
			<div className='container'>
				<div className='wellcome__img'>
					<img src={WellcomeImg} alt='wellcome-img' />
				</div>
				<div className='hero__info'>
					<h1 className='hero__info__title'>Wellcome {user.username}</h1>
					<p className='hero__info__description'>
						We are very happy that you try Lara Music. Let´s go to the party!
					</p>
					<Link href='/player'>
						<button className='hero__info__btn'> Listen Now</button>
					</Link>
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</section>
	);
};
