import React from "react";

import Header from "../components/Home/Com__HeaderPage";
import Login from "../components/Login/Com__Login";
import Footer from "../components/Home/Com__FooterPage";

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
