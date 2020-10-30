import { post } from "../lib/request";

export const authenticate = async (email, password) => {
	try {
		const res = await post("/api/v1/users/login/", {
			email,
			password,
		});
		return res;
	} catch (error) {
		console.error(error);
		return error.response && error.response.status === 404
			? "Wrong email/password"
			: "Unknown error. Please try again";
	}
};

///api/v1/users/login/
