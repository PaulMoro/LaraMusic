import { post } from "../lib/request";

export const authenticate = async (email, password) => {
	try {
		const res = await post("/api/v1/users/login/", {
			email,
			password,
		}).then((res) => {
			localStorage.setItem("userdata", res.user);
			//localStorage.setItem("password", res);
			localStorage.setItem("jwt", res.access_token);
		});

		return res;

		//localStorage.setItem("userData", res.user);
		//localStorage.setItem("jwt", res.access_token);
	} catch (error) {
		return error.response && error.response.status === 404
			? "Wrong email/password"
			: "Unknown error. Please try again";
	}
};

// if (!res || !res.user || !res.access_token) {
// 	throw new Error("error");
// }

// Cuando quiera recuperar la información del usuario
//const userData = localStorage.getItem("userData");
// userData.username;
//const jwt = localStorage.getItem("jwt");
// jwt.access_token
// TODO: Buscar como agregar la cabecera Authentication a mis peticiones

///api/v1/users/login/
