import React, { useState } from "react";
import Success from "../lib/Success";
import Error from "../lib/Error";
import { signIn, redirectIfAuthenticated } from "../lib/auth";

import LoginStyle from "./LoginStyle";

export const LoginForm = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [jwt, setJwt] = useState("");
	const { url, success } = props;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			signIn({ email, password });
		}

		const error = await signIn(email, password);

		if (error) {
			setError(error);
			return false;
		}

		const jwt = await signIn(email, password);

		if (jwt) {
			setJwt({
				jwt: true,
			});
			//Aqui se debe de redirigir a la página en caso de que sea un usuario valido
		}
	};
	return (
		<>
			{success && <Success message={success} />}
			{error && <Error message={error} />}
			<form onSubmit={handleSubmit} className='form-group'>
				<div className='form-item' id='email'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='form-item' id='pass'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
