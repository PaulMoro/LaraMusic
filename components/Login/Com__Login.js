import React from "react";
import { LoginForm } from "./LoginForm";
import womanImage from "../../assets/img/musicplaylist/attractive-woman-listening-to-music-on-a-rooftop-P4NM2BH.jpg";

const Login = () => {
	return (
		<main className='login'>
			<section id='login' className='tabcontent login__container'>
				<div className='tabcontent__form'>
					<h1>Music Online, your everlast playlist</h1>
					<p>Play your favorite music from everywhere </p>
					<LoginForm />
				</div>
				<div className='login__container-image'>
					<img src={womanImage} alt='login-image' />
				</div>
			</section>
		</main>
	);
};
export default Login;
