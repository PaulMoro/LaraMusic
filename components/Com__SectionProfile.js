import React from "react";

import "../assets/style/componentStyle/com__SectionProfile.scss";

const SectionProfile = () => {
  return (
    <section>
    <div className="userInf" >
      <div>
        <img className="userInf__photo" src="../../assets/img/user.jpg" alt=""/>
      </div>
      <h2>Anna Fernandez</h2>
      <h4>Change Password</h4>
      <p><img src="../../assets/img/corona.png" alt=""/> Premium</p>
    </div>
    <div className="userForm">
      <h1>Account</h1>
      <p>Donec sit amet lectus mauris. Fusce ultrices in orci ac rhoncus. Duis dictum tempus neque</p>
      <form className="infAccount" autocomplete="off">
        <div className="infAccount__container">      
          <label className="infAccount__container__name">Name</label>
          <input type="text" required/>
        </div>
        <div className="infAccount__container">      
          <label className="infAccount__container__name">User</label>
          <input type="email" required/>
        </div>
        <div className="infAccount__container">      
          <label className="infAccount__container__name">Pasword</label>
          <input type="password" required/>
        </div>
        <div className="infAccount__container">      
          <label className="infAccount__container__name">Brithday date</label>
          <input type="text" required/>
        </div>
        <div className="infAccount__container">      
          <label className="infAccount__container__name">Country</label>
          <input type="text" required/>
        </div>
      </form>
      <button>Edit</button>
    </div>
  </section>
  );
};

export default SectionProfile