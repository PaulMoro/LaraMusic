import React from "react";
import Login from "../Login/Login";

import { useAuth } from "../../contexts/AuthContext";

import WelcomeStyle from "../Style/welcome/welcomeStyle";

export const Welcome = () => {
	const { user } = useAuth();
	const username = user?.username ?? [];
	return (
		<section className='hero'>
			<div className='wellcome__img'>
				<Login />
			</div>
			<div className='hero__info'>
				<h1 className='hero__info__title'>Welcome {username}</h1>
				<p className='hero__info__description'>
					We are very happy that you try Lara Music. <br />
					Please Login and
					<strong> Let´s go to the party!</strong>
				</p>
			</div>

			<style jsx WelcomeStyle>
				{WelcomeStyle}
			</style>
		</section>
	);
};
