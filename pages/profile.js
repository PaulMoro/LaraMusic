import React from "react";


import Header from "../src/components/Header/HeaderPage";
import NavProfile from "../src/components/Profile/Com__NavProfile.js";
import SectionProfile from "../src/components/Profile/Com__SectionProfile.js";
import Footer from "../src/components/Home/FooterPage";

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
