import React from "react";

import Header from "../components/Header/HeaderPage";
import { Welcome } from "../components/Welcome/";
import Footer from "../components/Home/FooterPage";

export const login = () => {
	return (
		<>
			<Header />
			<Welcome />
			<Footer />
		</>
	);
};

export default login;
