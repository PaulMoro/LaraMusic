import redirect from "./redirect";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validation";

//Login

// export const Login = async (email, password) => {
// 	const jwt = localStorage.getItem("jwt");
// 	const userData = localStorage.getItem("userData");
// 	const cleanUserData = JSON.parse(userData);

// 	if (jwt) {
// 		var access = JSON.parse(jwt);
// 		console.log(access);
// 	}

// 	const error = validateCredentials(email, password);
// 	if (error) {
// 		return error;
// 	}

// 	const res = await authenticate(email, password);

// 	if (access) {
// 		redirect("/player");
// 	} else return null;
// };

// Register

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
	redirect("/wellcome");
	return null;
};

// export const signOut = (ctx = {}) => {
// 	if (process.browser) {
// 		localStorage.removeItem("jwt");
// 		//removeCookie("jwt");
// 		redirect("/", ctx);
// 	}
// };

export const getJwt = (ctx) => {
	localStorage.getItem("jwt");
};

export const isAuthenticated = (ctx) => !!getJwt(ctx);

export const redirectIfAuthenticated = (ctx) => {
	if (isAuthenticated(ctx)) {
		redirect("/welcome", ctx);
		return true;
	}
	return false;
};

export const redirectIfNotAuthenticated = (ctx) => {
	if (!isAuthenticated(ctx)) {
		redirect("/", ctx);
		return true;
	}
	return false;
};
