import React from "react";

import LoginStyle from "./LoginStyle";
import LoginForm from "./molecules/LoginForm";
import womanImage from "../../assets/img/Artist/loginwoman.jpg";

export const Login = () => {
	return (
		<section id='login' className='tabcontent login__container'>
			<div className='tabcontent__form'>
				<h1>Music Online, your everlast playlist</h1>
				<p>Play your favorite music from everywhere </p>
				<LoginForm />
			</div>
			<div className='login__container-image'>
				<img src={womanImage} alt='login-image' />
			</div>
			<style jsx LoginStyle>
				{LoginStyle}
			</style>
		</section>
	);
};