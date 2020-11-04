import React from "react";

/* import componenets */
import Header from "../components/Header/HeaderPage";
import NavProfile from "../components/profile/Com__NavProfile.js";
import SectionProfile from "../components/profile/Com__SectionProfile.js";
import Footer from "../components/Home/FooterPage";

const profile = (props) => {
	const { authenticated } = props;
	return (
		<div>
			<Header authenticated={authenticated} />
			<NavProfile />
			<SectionProfile />
			<Footer />
		</div>
	);
};

export default profile;
