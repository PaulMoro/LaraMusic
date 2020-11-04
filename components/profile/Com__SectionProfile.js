import React from "react";
import Com__SectionProfileStyle from "./style/Com__SectionProfileStyle";
import { useAuth } from "../../contexts/AuthContext";

const SectionProfile = () => {
	const { user } = useAuth();

	return (
		<section id='sectionProfile'>
			<div className='userInf'>
				<div>
					<img
						className='userInf__photo'
						src=''
						// src={user.profile.picture}
						alt={user.username}
					/>
				</div>
				<h2>{user.username} </h2>
				<h4>Change Password</h4>
			</div>
			<div className='userForm'>
				<h1>Account</h1>
				<p>
					Donec sit amet lectus mauris. Fusce ultrices in orci ac rhoncus. Duis
					dictum tempus neque
				</p>
				<form className='infAccount' autoComplete='off'>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>First Name</label>
						<input placeholder={user.first_name} type='text' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Last Name</label>
						<input placeholder={user.last_name} type='email' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>Your NickName</label>
						<input placeholder={user.username} type='password' required />
					</div>
					<div className='infAccount__container'>
						<label className='infAccount__container__name'>
							Your Favourite Music
						</label>
						<input placeholder={user.profile} type='text' required />
					</div>
					{/* <div className='infAccount__container'>
						<label className='infAccount__container__name'>Country</label>
						<input placeholder={user.first_name} type='text' required />
					</div> */}
				</form>
				<button>Edit</button>
			</div>
			<style jsx Com__SectionProfileStyle>
				{Com__SectionProfileStyle}
			</style>
		</section>
	);
};

export default SectionProfile;
