import React from "react";

import Header from "../components/Home/Com__HeaderPage";
import { UserTabs } from "../components/Login/UserTabs";
import Footer from "../components/Home/Com__FooterPage";

export const login = () => {
	return (
		<>
			<Header />
			<UserTabs />
			<Footer />
		</>
	);
};

export default login;
