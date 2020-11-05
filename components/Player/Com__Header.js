import React from "react";
import Link from "next/link";
import { VscSearch, VscBell } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import Header from "./styles/HeaderStyle";
import { useAuth } from "../../contexts/AuthContext";

import userImage from "../../assets/img/usuario.svg";

const HeaderHome = () => {
	const { user } = useAuth();
	return (
		<header id='headerHome'>
			<div className='searchBar'>
				<div className='searchBar_icon'>
					<FiSearch />
				</div>
				<input type='text' name='' placeholder='Search your entertainment' id='' />
			</div>
			<ul>
				<li className='iconsTop'>
					<figure>
						<VscBell />
					</figure>
				</li>
				{user && (
					<li className='userInf'>
						<img src={userImage} alt={user.username} />
						<div className='userInf__prop'>
							<a href='/profile'>{user.username}</a>
						</div>
					</li>
				)}
			</ul>

			<style jsx Header>
				{Header}
			</style>
		</header>
	);
};

export default HeaderHome;
