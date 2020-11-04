import React from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

import userImage from "../../assets/img/usuario.svg";
import HomeStyle from "./HeaderStyle";
import logo from "../../assets/img/Artist/logo.png";

function Header() {
	const { user, signOut } = useAuth();
	return (
		<header className='header'>
			<div className='container'>
				<Link href='/' className='header__img__container'>
					<img src={logo} alt='Logo-Lara' />
				</Link>
				<div className='header__links'>
					{user && (
						<Link href='/player'>
							<a className='header__link--player'>Lara Player</a>
						</Link>
					)}
					{!user && (
						<Link href='/register'>
							<a className='header__link--player'>Sign Up Now</a>
						</Link>
					)}
					{!user && (
						<Link href='/login'>
							<a className='header__link--login'>Login</a>
						</Link>
					)}
					{user && (
						<Link href='/profile' className='header__link--login'>
							<div className='perfil'>
								<img src={userImage} alt={user.username} />
								<div>
									<h4>{user.username}</h4>
									<button onClick={signOut}> Logout </button>
								</div>
							</div>
						</Link>
					)}
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</header>
	);
}
export default Header;
