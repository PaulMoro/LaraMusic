import React from "react";

/* import componenets */
import HeaderHome from "../components/Player/Com__Header";
import NavHomeScreen from "../components/Player/Nav.js";
import Section from "../components/Player/Com__Section.js";

/* import style */

//import "../assets/style/indexStyle.scss";

/* api */

const homeScreen = () => {
	return (
		<div className='lara'>
			<HeaderHome />
			<NavHomeScreen />
			<Section />
		</div>
	);
};

export default homeScreen;
