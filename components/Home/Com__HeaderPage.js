import React from "react";
import Link from "next/link";

import { getCookie, removeCookie } from "../../lib/session";
import { signIn, redirectIfAuthenticated } from "../../lib/auth";

import Success from "../../components/Login/molecules/Success";
import Error from "../../components/Login/molecules/Error";

import HomeStyle from "./HomeStyle";
import logo from "../../assets/img/Artist/logo.png";

import { HeaderLinks } from "./molecules/Mol__HeaderLinks";

function Header(props) {
	const url = props.HeaderLinks;
	//const { error } = state;
	return (
		<header className='header'>
			<div className='container'>
				<Link href='/' className='header__img__container'>
					<img src={logo} alt='Logo-Lara' />
				</Link>
				{/* <HeaderLinks authenticated={false} pathname={url.pathname} /> */}
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</header>
	);
}
export default Header;
