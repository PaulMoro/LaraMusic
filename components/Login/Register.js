import React from "react";
import LoginStyle from "./LoginStyle";

export const Register = () => {
	return (
		<section id='create-account' className='tabcontent account'>
			<div className='tabcontent__form'>
				<h1>Music Online, your everlast playlist</h1>
				<p>Play your favorite music from everywhere </p>
				<form className='form-group'>
					<div className='form-item' id='name'>
						<label htmlFor='name'>Name</label>
						<input type='name' id='name' name='name' />
					</div>
					<div className='form-item' id='email'>
						<label htmlFor='email'>User email</label>
						<input type='email' id='email' name='email' />
					</div>
					<div className='form-item' id='pass'>
						<label htmlFor='pass'>Password</label>
						<input id='pass' type='password' name='pass' />
					</div>
					<div className='form-item' id='pass'>
						<label htmlFor='pass'>Password</label>
						<input id='pass' type='password' name='pass' />
					</div>
					<div className='form-item' id='pass'>
						<label htmlFor='pass'>Birth Date</label>
						<input id='pass' type='password' name='pass' />
					</div>
					<div className='form-item' id='pass'>
						<label htmlFor='pass'>Country</label>
						<input id='pass' type='password' name='pass' />
					</div>
					<div className='buttons'>
						<button className='send' type='submit'>
							Login
						</button>
					</div>
					<small>
						By registering you confirm that you accept the
						<a href>Terms and Conditions and Privacy Policy</a>
					</small>
				</form>
			</div>

			<style jsx LoginStyle>
				{LoginStyle}
			</style>
		</section>
	);
};
