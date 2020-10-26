import React from "react";

//import "../assets/style/componentStyle/com__NavProfile.scss";

const NavProfile = () => {
	return (
		<nav>
			<h2>Profile settings</h2>
			<div className='menu'>
				<a href='#' className='menu_actual'>
					Account
				</a>
				<a href='#' className='menu_noActual'>
					Your plan
				</a>
				<a href='#' className='menu_noActual'>
					Password
				</a>
			</div>
		</nav>
	);
};

export default NavProfile;
