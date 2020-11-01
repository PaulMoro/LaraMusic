import React from "react";

/* import componenets */
import HeaderProfile from "../components/Com__HeaderProfile.js";
import NavProfile from "../components/Com__NavProfile.js";
import SectionProfile from "../components/Com__SectionProfile.js";
import FooterProfile from "../components/Com__FooterProfile.js";

/* import style */

const profile = () => {
	return (
		<div>
			<HeaderProfile />
			<NavProfile />
			<SectionProfile />
			<FooterProfile />
		</div>
	);
};

export default profile;
