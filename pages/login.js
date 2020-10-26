import React from "react";

import HeaderProfile from "../components/Com_HeaderProfile";
import Login from "../components/Login/Com__Login";
import FooterProfile from "../components/Com__FooterProfile";

//import LoginContainer from "../components/containers/LoginContainer"

export const login = () => {
	return (
		<div>
			<HeaderProfile />
			<Login />
			<FooterProfile />
		</div>
	);
};

export default login;
