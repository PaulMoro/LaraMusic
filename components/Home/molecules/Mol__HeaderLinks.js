import React from "react";
import HeaderLinksStyle from "./styles/HeaderLinksStyle";
import Link from "next/link";
//import "../../assets/style/moleculeStyle/mol__HeaderLinks.scss";
function HeaderLinks() {
	return (
		<div className='header__links'>
			<Link href='/player' className='header__link--player'>
				Lara Player
			</Link>
			<Link href='/login' className='header__link--login'>
				Login
			</Link>

			<style jsx HeaderLinksStyle>
				{HeaderLinksStyle}
			</style>
		</div>
	);
}

export default HeaderLinks;
