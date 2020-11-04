import React, { useState } from "react";
import Success from "../../../lib/Success";
import Error from "../../../lib/Error";
//import { Login, redirectIfAuthenticated } from "../../../lib/auth";
import { useForm } from "../../../Hooks/useForm";
import { useAuth } from "../../../contexts/AuthContext";

import LoginStyle from "../LoginStyle";

export const LoginForm = () => {
	const [error, setError] = useState("");
	const { Login } = useAuth();
	const [formLoginValues, handleLoginInputChange] = useForm({
		email: "",
		password: "",
	});

	const { email, password } = formLoginValues;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			Login({ email, password });
		}

		const error = await Login(email, password);

		if (error) {
			setError(error);
			return false;
		}

		const jwt = await Login(email, password);

		if (jwt) {
			setJwt({
				jwt: true,
			});
		}
	};

	return (
		<>
			{/* {success && <Success message={success} />} */}
			{error && <Error message={error} />}
			<form onSubmit={handleSubmit} className='form-group'>
				<div className='form-item' id='email'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleLoginInputChange}
					/>
				</div>
				<div className='form-item' id='pass'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={password}
						onChange={handleLoginInputChange}
					/>
				</div>
				<div className='buttons'>
					<button className='send' type='submit'>
						Login
					</button>
					<button type='reset'>Forgot your Password?</button>
				</div>
				<small>
					By registering you confirm that you accept the
					<a href='/'>Terms and Conditions and Privacy Policy</a>
				</small>
			</form>
			<style jsx LoginStyle>
				{LoginStyle}
			</style>
		</>
	);
};
