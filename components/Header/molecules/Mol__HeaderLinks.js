import React from "react";
import HeaderLinksStyle from "./HeaderLinksStyle";
import Link from "next/link";

export const HeaderLinks = () => {
	return (
		<div className='header__links'>
			<Link href='/player'>
				<a className='header__link--player'>Lara Player</a>
			</Link>
			<Link href='/register'>
				<a className='header__link--player'>Sign Up Now</a>
			</Link>

			<Link href='/login'>
				<a className='header__link--login'>Login</a>
			</Link>

			<style jsx HeaderLinksStyle>
				{HeaderLinksStyle}
			</style>
		</div>
	);
};
