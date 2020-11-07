import React, { createContext, useState, useContext, useEffect } from "react";

import redirect from "../lib/redirect";
import { authenticate } from "../services/authApi";
import { validateCredentials } from "../lib/validation";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [isLogged, setIsLogged] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const userData = localStorage.getItem("userData");
		setUser(JSON.parse(userData));
		setIsLogged(!!userData);

		if (!isLogged && router.pathname !== "/") {
			redirect("/login");
		}
	}, [isLogged, router.pathname]);

	const Login = async (email, password) => {
		const jwt = localStorage.getItem("jwt");
		const userData = localStorage.getItem("userData");
		const cleanUserData = JSON.parse(userData);

		if (jwt) {
			var access = JSON.parse(jwt);
		}

		const error = validateCredentials(email, password);
		if (error) {
			return error;
		}

		const res = await authenticate(email, password);
		setIsLogged(true);
		if (access) {
			redirect("/player");
		} else return null;
	};

	const signOut = (user) => {
		localStorage.removeItem("userData");
		setUser(null);
		//delete api.defaults.headers.Authorization;
		redirect("/");
		//window.location.pathname = "/";
	};

	// const signOut = (ctx = {}) => {
	// 	if (process.browser) {
	// 		localStorage.removeItem("userData");
	// 		redirect("/", ctx);
	// 	}
	// };

	return (
		<AuthContext.Provider
			value={{ isAuthenticated: !!user, user, Login, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
