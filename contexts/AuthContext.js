import React, { createContext, useState, useContext, useEffect } from "react";

import redirect from "../lib/redirect";
import { authenticate } from "../services/authApi";
import { validateCredentials } from "../lib/validation";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const userData = localStorage.getItem("userData");
		const jwt = localStorage.getItem("jwt");
		setUser(JSON.parse(userData));
		setIsLogged(true);

		if (!(isLogged || loading)) {
			redirect("/login");
		}
		setLoading(false);
	}, [isLogged, loading]);

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

		if (access) {
			redirect("/player");
		} else return null;
	};

	const signOut = (ctx = {}) => {
		if (process.browser) {
			localStorage.removeItem("userData");
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
