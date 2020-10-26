import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { loginAuth } from "../../utils/auth";

class LoginForm extends Component {
	static getInitialProps({ req }) {
		const apiUrl = "https://laramusicapi.herokuapp.com/api/v1/users/login";
		return { apiUrl };
	}

	constructor(props) {
		super(props);

		this.state = { username: "", error: "", password: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ email: event.target.value });
		this.setState({ password: event.target.value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const url = this.props.apiUrl;

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			if (response.ok) {
				const { token } = await response.json();
				loginAuth({ token });
			} else {
				console.log("Login failed.");
				// https://github.com/developit/unfetch#caveats
				let error = new Error(response.statusText);
				error.response = response;
				return Promise.reject(error);
			}
		} catch (error) {
			console.error(
				"You have an error in your code or there are Network issues.",
				error
			);
			throw new Error(error);
		}
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form-group'>
				<div className='form-item'>
					<label htmlFor='email'>Email</label>
					<input
						onchange={this.handleChange}
						value={this.state.email}
						type='email'
						id='email'
					/>
				</div>
				<div className='form-item'>
					<label htmlFor='password'>Password</label>
					<input
						onchange={this.handleChange}
						value={this.state.password}
						id='password'
						type='password'
						name='password'
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
				<p className={`error ${this.state.error && "show"}`}>
					{this.state.error && `Error: ${this.state.error}`}
				</p>
			</form>
		);
	}
}

export default LoginForm;
