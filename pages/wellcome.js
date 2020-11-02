import React from "react";

import Header from "../components/Header/HeaderPage";
import { Wellcome } from "../components/Wellcome/";
import Footer from "../components/Home/FooterPage";

export const login = () => {
	return (
		<>
			<Header />
			<Wellcome />
			<Footer />
		</>
	);
};

export default login;
