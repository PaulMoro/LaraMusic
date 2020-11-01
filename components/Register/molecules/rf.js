import React, { useState } from "react";
import Success from "../../../lib/Success";
import Error from "../../../lib/Error";
import { signUp, redirectIfAuthenticated } from "../../../lib/auth";
import { useForm } from "../../../Hooks/useForm";

import LoginStyle from "../LoginStyle";

export const RegisterForm = () => {
	const [error, setError] = useState("");

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		username: "jobana",
		first_name: "jobana",
		last_name: "garavito",
		email: "ana@example.com",
		biography: "rock",
		password: "ana123456",
		password_confirmation: "ana123456",
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

// import React, { useState } from "react";
// import Error from "./Error";
// import { signUp, redirectIfAuthenticated } from "../../../lib/auth";

// import LoginStyle from "../LoginStyle";

// export default class Register extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			error: null,
// 		};
// 	}
// 	static getInitialProps(ctx) {
// 		redirectIfAuthenticated(ctx);

// 		return {};
// 	}

// 	render() {
// 		const { url } = this.props;
// 		const { error } = this.state;
// 		return (

// 		);
// 	}

// 	handleSubmit = async (e) => {
// 		e.preventDefault();

// 		const username = e.target.elements.username.value;
// 		const first_name = e.target.elements.first_name.value;
// 		const last_name = e.target.elements.last_name.value;
// 		const email = e.target.elements.email.value;
// 		const biography = e.target.elements.biography.value;
// 		const password = e.target.elements.password.value;
// 		const password_confirmation = e.target.elements.password_confirmation.value;
// 		console.log(e.target.elements.password_confirmation.value);
// 		console.log(e.target.elements.password.value);
// 		const error = await signUp(
// 			username,
// 			first_name,
// 			last_name,
// 			email,
// 			biography,
// 			password,
// 			password_confirmation
// 		);

// 		if (error) {
// 			this.setState({
// 				error,
// 			});
// 			return false;
// 		}
// 	};
// }
