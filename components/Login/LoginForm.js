import React, { useState } from "react";
import Router from "next/router";
//import cookie from "js-cookie";

export const LoginForm = () => {
	const [loginError, setLoginError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		//call api
		fetch("https://laramusicapi.herokuapp.com/api/v1/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((r) => {
				return r.json();
			})
			.then((data) => {
				if (data && data.error) {
					setLoginError(data.message);
				}
				if (data && data.token) {
					//set cookie
					cookie.set("token", data.token, { expires: 2 });
					Router.push("/");
				}
			});
	}
	return (
		<form onSubmit={handleSubmit} className='form-group'>
			<div className='form-item'>
				<label htmlFor='email'>Email</label>
				<input
					//onchange={(e) => setEmail(e.target.value)}
					//value={email}
					type='email'
					id='email'
				/>
			</div>
			<div className='form-item'>
				<label htmlFor='pass'>Password</label>
				<input
					//onchange={(e) => setPassword(e.target.value)}
					//value={password}
					id='pass'
					type='password'
					name='pass'
				/>
			</div>
			<div className='buttons'>
				<button className='send' type='submit' value='submit'>
					Login
				</button>
				<button type='reset'>Forgot your Password?</button>
			</div>
			<small>
				By registering you confirm that you accept the
				<a href>Terms and Conditions and Privacy Policy</a>
			</small>
			{loginError && <p style={{ color: "red" }}>{loginError}</p>}
		</form>
	);
};
