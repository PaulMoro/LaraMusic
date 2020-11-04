import React, { createContext, useState, useContext, useEffect } from "react";

import redirect from "../lib/redirect";
import { authenticate } from "../services/authApi";
import { validateCredentials } from "../lib/validation";
import { Loading } from "../components/Loading/";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	//let userData = "";

	useEffect(() => {
		const userData = localStorage.getItem("userData");
		const jwt = localStorage.getItem("jwt");

		if (jwt) {
			if (user) setUser(JSON.parse(userData));
		}
		setLoading(false);
	}, []);

	const Login = async (email, password) => {
		const jwt = localStorage.getItem("jwt");
		const userData = localStorage.getItem("userData");
		const cleanUserData = JSON.parse(userData);

		if (jwt) {
			var access = JSON.parse(jwt);
			console.log(access);
		}

		const error = validateCredentials(email, password);
		if (error) {
			return error;
		}

		const res = await authenticate(email, password);

		if (access) {
			redirect("/player");
		} else return null;
	};

	const signOut = (ctx = {}) => {
		if (process.browser) {
			localStorage.clear();
			redirect("/", ctx);
		}
	};

	// const logout = (email, password) => {
	// 	localStorage.removeItem("jwt");
	// 	//Cookies.remove("token");
	// 	setUser(null);
	// 	delete api.defaults.headers.Authorization;
	// 	window.location.pathname = "/login";
	// };

	// export const getJwt = (ctx) => {
	// 	localStorage.getItem("jwt");
	// };

	return (
		<AuthContext.Provider
			value={{ isAuthenticated: !!user, user, Login, loading, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const ProtectRoute = ({ children }) => {
	const { isAuth, isLoading } = useAuth();

	useEffect(() => {
		const jwt = localStorage.getItem("jwt");

		if (jwt) {
			if (isAuth) setUser(JSON.parse(userData));
		}
		setLoading(false);
	}, []);

	if (jwt) isAuthenticated = (ctx) => !!jwt(ctx);

	const redirectIfAuthenticated = (ctx) => {
		if (isAuthenticated(ctx)) {
			redirect("/welcome", ctx);
			return true;
		}
		return false;
	};

	const redirectIfNotAuthenticated = (ctx) => {
		if (!isAuthenticated(ctx)) {
			redirect("/", ctx);
			return true;
		}
		return false;
	};
	return children;
};

export const useAuth = () => useContext(AuthContext);
