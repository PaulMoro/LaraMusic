import React from "react";

import Header from "../components/Header/Com__HeaderPage";
import { Wellcome } from "../components/Wellcome/";
import Footer from "../components/Home/Com__FooterPage";

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
