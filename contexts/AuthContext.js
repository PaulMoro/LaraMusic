import React, { createContext, useState, useContext, useEffect } from "react";

import redirect from "../lib/redirect";
import { authenticate } from "../services/authApi";
import { validateCredentials } from "../lib/validation";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const userData = localStorage.getItem("userData");
		const jwt = localStorage.getItem("jwt");

		if (jwt) {
			if (user) setUser(JSON.parse(userData));
		}

		setLoading(false);

		// 	if (!(user || loading)) {
		// 		router.push("/login");
		// 	}
	}, [[user, loading]]);

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

	return (
		<AuthContext.Provider
			value={{ isAuthenticated: !!user, user, Login, loading, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
