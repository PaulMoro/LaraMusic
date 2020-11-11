import React from "react";

import HeaderHome from "../src/components/Player/Header";
import NavHomeScreen from "../src/components/Player/Nav.js";
import Play from "../src/components/Play/Play";
import ContentAbum from "../src/components/Albums/ContentAbum";

function Album() {
	return (
		<div className='lara'>
			<HeaderHome></HeaderHome>
			<NavHomeScreen></NavHomeScreen>
			<ContentAbum></ContentAbum>
			<Play></Play>
		</div>
	);
}
export default Album;
