import React from "react";

import Header from "../components/Header/HeaderPage";
import Login from "../components/Login/Login";
import Footer from "../components/Home/FooterPage";

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
