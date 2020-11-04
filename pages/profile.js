import React from "react";

/* import componenets */
import Header from "../components/Header/HeaderPage";
import NavProfile from "../components/profile/Com__NavProfile.js";
import SectionProfile from "../components/profile/Com__SectionProfile.js";
import Footer from "../components/Home/FooterPage";

const profile = () => {
	return (
		<div>
			<Header />
			<NavProfile />
			<SectionProfile />
			<Footer />
		</div>
	);
};

export default profile;
