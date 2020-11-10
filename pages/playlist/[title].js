import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* import componenets */
import HeaderHome from "../../components/Player/Header";
import NavHomeScreen from "../../components/Player/Nav.js";
import List from "../../components/Player/ListPlayer";
import Play from "../../components/Play/Play";

const playlist = () => {
	const router = useRouter();
	const { title } = router.query;
	//console.log(router);
	return (
		<div className='lara'>
			<p>Im am {title}</p>
			<HeaderHome />
			<NavHomeScreen />
			<div className='containerContent'>
				<List title={title} />
			</div>
			<Play></Play>
		</div>
	);
};

export default playlist;
