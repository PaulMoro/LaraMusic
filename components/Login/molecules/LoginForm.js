import { Component } from "react";
import Success from "./Success";
import Error from "./Error";
import { getCookie, removeCookie } from "../../../lib/session";
import { signIn, redirectIfAuthenticated } from "../../../lib/auth";
//import Header from "../../components/Header";

import LoginStyle from "../LoginStyle";

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}
	static getInitialProps(ctx) {
		if (redirectIfAuthenticated(ctx)) {
			return {};
		}

		const success = getCookie("success", ctx.req);
		if (success) {
			removeCookie("success");
		}
		return {
			success,
		};
	}

	render() {
		const { url, success } = this.props;
		const { error } = this.state;

		return (
			<>
				{success && <Success message={success} />}
				{error && <Error message={error} />}

				<form onSubmit={this.handleSubmit} className='form-group'>
					<div className='form-item' id='email'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' name='email' />
					</div>
					<div className='form-item' id='pass'>
						<label htmlFor='password'>Password</label>
						<input id='password' type='password' name='password' />
					</div>
					<div className='buttons'>
						<button className='send' type='submit'>
							Login
						</button>
						<button type='reset'>Forgot your Password?</button>
					</div>
					<small>
						By registering you confirm that you accept the
						<a href>Terms and Conditions and Privacy Policy</a>
					</small>
				</form>

				<style jsx LoginStyle>
					{LoginStyle}
				</style>
			</>
		);
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		const error = await signIn(email, password);

		if (error) {
			this.setState({
				error,
			});
			return false;
		}
	};
}
