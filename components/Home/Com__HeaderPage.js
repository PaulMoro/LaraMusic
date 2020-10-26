import React from "react";
import HomeStyle from "./HomeStyle";
import logo from "../../assets/img/Artist/logo.png";

import HeaderLinks from "./molecules/Mol__HeaderLinks";
// import logoLara from "../assets/img/lara_header.png";
function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<figure className='header__img__container'>
					<img src={logo} alt='Logo-Lara' />
				</figure>
				<HeaderLinks />
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</header>
	);
}
export default Header;
