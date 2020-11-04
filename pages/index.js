import React from "react";
import Header from "../components/Header/HeaderPage";
import Hero from "../components/Home/Hero";
import LaraSpecs from "../components/Home/LaraSpecs";
import TopArtist from "../components/Home/TopArtist";
import Footer from "../components/Home/FooterPage";
function LandingPage(props) {
	const { authenticated } = props;
	return (
		<>
			<Header authenticated={false} />
			<Hero />
			<LaraSpecs />
			<TopArtist />
			<Footer />
		</>
	);
}
export default LandingPage;
