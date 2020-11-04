import React, { useState } from "react";
import Success from "../../../lib/Success";
import Error from "../../../lib/Error";
import { signUp, redirectIfAuthenticated } from "../../../lib/auth";
import { useForm } from "../../../Hooks/useForm";

import LoginStyle from "../LoginStyle";

export const RegisterForm = () => {
	const [error, setError] = useState("");

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		username: "",
		first_name: "",
		last_name: "",
		email: "",
		biography: "",
		password: "",
		password_confirmation: "",
	});

	const {
		username,
		first_name,
		last_name,
		email,
		biography,
		password,
		password_confirmation,
	} = formRegisterValues;

	const handleSubmit = async (e) => {
		e.preventDefault();

		const error = await signUp(
			username,
			first_name,
			last_name,
			email,
			biography,
			password,
			password_confirmation
		);
		console.log(formRegisterValues);
		if (error) {
			setError(error);
		}
		return false;
	};

	return (
		<>
			{error && <Error message={error} />}
			<form className='form-group' onSubmit={handleSubmit}>
				<div className='form-item' id='name'>
					<label htmlFor='username'>User Name</label>
					<input
						type='text'
						id='username'
						name='username'
						value={username}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='form-item' id='name'>
					<label htmlFor='first_name'>First Name</label>
					<input
						type='text'
						id='first_name'
						name='first_name'
						value={first_name}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='form-item' id='name'>
					<label htmlFor='last_name'>Last Name</label>
					<input
						type='text'
						id='last_name'
						name='last_name'
						value={last_name}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='form-item' id='email'>
					<label htmlFor='email'>User email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='form-item' id='name'>
					<label htmlFor='biography'>Your favourite music</label>
					<input
						type='text'
						id='biography'
						name='biography'
						value={biography}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='form-item' id='password'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={password}
						onChange={handleRegisterInputChange}
					/>
					<span>{`Password, 8 characters min`}</span>
				</div>
				<div className='form-item' id='pass'>
					<label htmlFor='password_confirmation'>Password Confirmation</label>
					<input
						id='password_confirmation'
						type='password'
						name='password_confirmation'
						value={password_confirmation}
						onChange={handleRegisterInputChange}
					/>
				</div>
				<div className='buttons'>
					<button className='send' type='submit'>
						Register
					</button>
				</div>
				<small>
					By registering you confirm that you accept the
					<a href='/'>Terms and Conditions and Privacy Policy</a>
				</small>
				<style jsx LoginStyle>
					{LoginStyle}
				</style>
			</form>
		</>
	);
};
