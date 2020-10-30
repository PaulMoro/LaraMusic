import React from "react";

import Header from "../components/Header/Com__HeaderPage";
import { Login } from "../components/Login/Login";
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
