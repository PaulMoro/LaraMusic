import { post } from "./request";

export const authenticate = async (email, password) => {
	localStorage.clear();

	try {
		const res = await post("/api/v1/users/login/", {
			email,
			password,
		}).then((res) => {
			if (res.data) {
				localStorage.setItem("userData", JSON.stringify(res.data.user));
				localStorage.setItem("jwt", JSON.stringify(res.data.access_token));
			}
		});
		return res;
	} catch (error) {
		return error.response && error.response.status === 404
			? "Wrong email/password"
			: "Unknown error. Please try again";
	}
};
