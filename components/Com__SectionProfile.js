import React from "react";

import "../assets/style/componentStyle/com__SectionProfile.scss";

const SectionProfile = () => {
  return (
    <section>
        <div class="userInf">
          <div>
            <img class="userInf__photo" src="../../assets/img/user.jpg" alt=""/>
          </div>
          <h2>Anna Fernandez</h2>
          <h4>Change Password</h4>
          <p><img src="../../assets/img/corona.png" alt=""/> Premium</p>
        </div>
        <div class="userForm">
          <h1>Account</h1>
          <p>Donec sit amet lectus mauris. Fusce ultrices in orci ac rhoncus. Duis dictum tempus neque</p>
          <form class="infAccount" autocomplete="off">
            <div class="infAccount__container">
              <label class="infAccount__container__name">Name</label>
              <input type="text" required/>
            </div>
            <div class="infAccount__container">
              <label class="infAccount__container__name">User</label>
              <input type="email" required/>
            </div>
            <div class="infAccount__container">
              <label class="infAccount__container__name">Pasword</label>
              <input type="password" required/>
            </div>
            <div class="infAccount__container">
              <label class="infAccount__container__name">Brithday date</label>
              <input type="text" required/>
            </div>
            <div class="infAccount__container">
              <label class="infAccount__container__name">Country</label>
              <input type="text" required/>
            </div>
          </form>
          <button>Edit</button>
        </div>
      </section>
    );
};

export default SectionProfile