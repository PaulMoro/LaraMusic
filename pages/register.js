import React from "react";

import Header from "../components/Header/HeaderPage";
import { Register } from "../components/Register/Register";
import Footer from "../components/Home/FooterPage";

export const login = (props) => {
	const { authenticated } = props;
	return (
		<>
			<Header authenticated={false} />
			<Register />
			<Footer />
		</>
	);
};

export default login;
