import React from "react";
import { useRouter } from "next/router";

import { get } from "../../lib/request";

const playlist = ({ user }) => {
	return (
		<div>
			{/* <p>{user.profile.musiclists}</p> */}
			hola
		</div>
	);
};

export default playlist;

export const getServerSideProps = async ({ params }) => {
	const res = await fetch(
		`https://laramusicapi.herokuapp.com/api/v1/users/${params.username};`
	);
	//const musicLists = user?.profile?.musiclists ?? [];

	const user = await res.json();

	console.log(user);
	return {
		props: {
			user,
		},
	};
};
