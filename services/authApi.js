import { post } from "../lib/request";

export const authenticate = async (email, password) => {
	try {
		const res = await post("/api/v1/users/login/", {
			//auth: {
			email,
			password,
			//},
		});
		return res.data;
	} catch (error) {
		if (error.message) {
			return error.response && error.response.status === 404
				? "Wrong email/password"
				: "Unknown error. Please try again";
		}
	}
};

///api/v1/users/login/
