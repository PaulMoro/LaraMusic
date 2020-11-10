import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";

/* import componenets */
import HeaderHome from "../../components/Player/Com__Header";
import NavHomeScreen from "../../components/Player/Nav.js";
import ListPlayer from "../../components/Player/ListPlayer";

import Play from "../../src/components/Play/Play";

// export const getServerSideProps = async ({ params }) => {
// 	const { user } = useAuth();
// 	const tracks = (await user?.profile?.musiclists[0]?.musictracks.`${params.id}`) ?? [];

// 	return {
// 		props: {
// 			tracks,
// 		},
// 	};
// };

const playlist = (props) => {
	const router = useRouter();
	console.log(router);

	return (
		<div className='lara'>
			<HeaderHome />
			<NavHomeScreen />
			<div className='containerContent'>
				<ListPlayer />
			</div>
			<Play></Play>
		</div>
	);
};

export default playlist;
