import React from "react";
import HeaderLinksStyle from "./HeaderLinksStyle";
import Link from "next/link";
import { useAuth } from "../../../contexts/AuthContext";
import redirect from "../../../lib/redirect";

export const HeaderLinks = () => {
	const { signOut } = useAuth();

	const handleLogout = () => {
		signOut();
		redirect("/");
		return {};
	};
	return (
		<div className='header__links'>
			{authenticated && (
				<Link href='/player'>
					<a className='header__link--player'>Lara Player</a>
				</Link>
			)}
			{!authenticated && (
				<Link href='/register'>
					<a className='header__link--player'>Sign Up Now</a>
				</Link>
			)}
			{!authenticated && (
				<Link href='/login'>
					<a className='header__link--login'>Login</a>
				</Link>
			)}
			{authenticated && (
				<Link href='/profile'>
					<a className='header__link--login'>My Profile</a>
				</Link>
			)}
			{authenticated && <button onClick={handleLogout}> Logout </button>}
			<style jsx HeaderLinksStyle>
				{HeaderLinksStyle}
			</style>
		</div>
	);
};
