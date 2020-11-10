import React from "react";

import Header from "../src/components/Header/HeaderPage";
import Login from "../src/components/Login/Login";
import Footer from "../src/components/Home/FooterPage";

export const login = () => {
	return (
		<>
			<Header />
			<Login />
			<Footer />
		</>
	);
};

export default login;
