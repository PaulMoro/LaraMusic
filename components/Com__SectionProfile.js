import React from "react";
import { CgCrown } from "react-icons/cg";

const SectionProfile = () => {
	return (
		<section id='sectionProfile'>
			<div className='userInf'>
				<div>
					<img
						className='userInf__photo'
						src='https://i.imgur.com/rQ73ETF.jpg'
						alt=''
					/>
				</div>
				<h2>Anna Fernandez</h2>
				<h4>Change Password</h4>
				<p>
					<div>
						<CgCrown />
					</div>
					Premium
				</p>
			</div>
			<div className='userForm'>
				<h1>Account</h1>
				<p>
					Donec sit amet lectus mauris. Fusce ultrices in orci ac rhoncus. Duis
					dictum tempus neque
				</p>
				<form className='infAccount' autoComplete='off'>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Name</label>
						<input type='text' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>User</label>
						<input type='email' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Pasword</label>
						<input type='password' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Brithday date</label>
						<input type='text' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Country</label>
						<input type='text' required />
					</div>
				</form>
				<button>Edit</button>
			</div>
		</section>
	);
};

export default SectionProfile;
