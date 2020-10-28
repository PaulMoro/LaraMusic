import React from "react";
import HeaderLinksStyle from "./styles/HeaderLinksStyle";
import Link from "next/link";

export default ({ pathname, authenticated, query = false }) => {
	return (
		<div className='header__links'>
			<Link href='/'>
				<a className={pathname === "/" && "is-active"}>Home</a>
			</Link>

			<Link href='/player'>
				<a className='header__link--player'>Lara Player</a>
			</Link>

			<Link href='/login'>
				<a className='header__link--login'>Login</a>
			</Link>

			{authenticated && (
				<Link href='/profile'>
					<a className={pathname === "/profile" && !query && "is-active"}>Profile</a>
				</Link>
			)}

			{!authenticated && (
				<Link href='/login'>
					<a className={pathname === "/login" && "is-active"}>Login</a>
				</Link>
			)}

			{!authenticated && (
				<Link href='/register'>
					<a className={pathname === "/register" && "is-active"}>Register</a>
				</Link>
			)}

			{authenticated && (
				<Link href='/logout'>
					<a className={pathname === "/logout" && "is-active"}>Logout</a>
				</Link>
			)}

			<style jsx HeaderLinksStyle>
				{HeaderLinksStyle}
			</style>
		</div>
	);
};
