import React from "react";

import Header from "../src/components/Header/HeaderPage";
import { Welcome } from "../src/components/Welcome/";
import Footer from "../src/components/Home/FooterPage";

export const welcome = () => {
	return (
		<>
			<Header />
			<Welcome />
			<Footer />
		</>
	);
};

export default welcome;
