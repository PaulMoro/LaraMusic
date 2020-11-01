import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validation";
import { post } from "../lib/request";

export const signIn = async (email, password) => {
	const error = validateCredentials(email, password);
	if (error) {
		return error;
	}

	// const res = await authenticate(email, password);
	// if (!res.jwt) {
	// 	localStorage.getItem("email");
	// 	localStorage.getItem("jwt");
	// 	return res.access_token;
	// }

	const res = await authenticate(email, password);
	if (res == 201) {
		redirect("/player");
		console.log("hola");
	} else {
		return error;
	}

	//const userData = localStorage.getItem("userData");
	//const jwt = localStorage.getItem("jwt");

	//setCookie("jwt", res.jwt);

	// const jwt  = localStorage.getItem('jwt')
	// jwt.access_token

	//redirect("/player");
	return null;
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

	//setCookie("success", `${username}, your account was created.`);
	redirect("/login");
	return null;
};

export const signOut = (ctx = {}) => {
	if (process.browser) {
		//removeCookie("jwt");
		redirect("/login", ctx);
	}
};

// export const getJwt = (ctx) => {
// 	return getCookie("jwt", ctx.req);
// };

export const isAuthenticated = (ctx) => !!getJwt(ctx);

export const redirectIfAuthenticated = (ctx) => {
	if (isAuthenticated(ctx)) {
		redirect("/player", ctx);
		return true;
	}
	return false;
};

export const redirectIfNotAuthenticated = (ctx) => {
	if (!isAuthenticated(ctx)) {
		redirect("/login", ctx);
		return true;
	}
	return false;
};
