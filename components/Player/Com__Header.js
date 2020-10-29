import React from "react";
import Link from "next/link";
import { VscSearch, VscBell } from "react-icons/vsc";

import Header from "./styles/HeaderStyle";

const HeaderHome = () => {
	return (
		<header id='headerHome'>
			<div className='searchBar'>
				<div className='searchBar_icon'>
					<VscSearch />
				</div>
				<input type='text' name='' id='' />
			</div>
			<ul>
				<li className='iconsTop'>
					<div>
						<VscBell />
					</div>
				</li>
				<li className='userInf'>
					<Link href='/profile' className='header__link--profile'>
						<a>
							<img src='https://i.imgur.com/rQ73ETF.jpg' alt='user img' />
							<div className='userInf__prop'>
								<h4>Fulanita Roquera</h4>
							</div>
						</a>
		      </Link>
				</li>
			</ul>

			<style jsx Header>
				{Header}
			</style>
		</header>
	);
};

export default HeaderHome;
