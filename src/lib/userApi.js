import { post } from "../lib/request";
import redirect from "../lib/redirect";
import { validateNewUser } from "./validation";

export const createUser = async (
	first_name,
	last_name,
	username,
	email,
	biography,
	password,
	password_confirmation
) => {
	try {
		const response = await post("/api/v1/users/signup/", {
			first_name,
			last_name,
			username,
			email,
			password,
			password_confirmation,
			profile: { biography },
		});
		return response;
	} catch (error) {
		return error.response && error.response.status === 422
			? "Email is already taken."
			: "Unknown error. Please try again";
	}
};

export const signUp = async (
	username,
	first_name,
	last_name,
	email,
	biography,
	password,
	password_confirmation
) => {
	const error = validateNewUser(
		username,
		first_name,
		last_name,
		email,
		biography,
		password,
		password_confirmation
	);
	if (error) {
		return error;
	}

	const res = await createUser(
		username,
		first_name,
		last_name,
		email,
		biography,
		password,
		password_confirmation
	);
	if (!res.data) {
		return res;
	}
	redirect("/welcome");
	return null;
};
