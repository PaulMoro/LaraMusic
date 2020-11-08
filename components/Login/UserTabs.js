import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";

import LoginStyle from "./LoginStyle";

export const UserTabs = () => {
  return (
    <main className="login">
      <div className="login__tabs-link">
        <button
          className="tablinks"
          onClick="openTab(event, 'login')"
          id="defaultOpen"
        >
          Login
        </button>
        <button className="tablinks" onClick="openTab(event, 'create-account')">
          Create account
        </button>
      </div>
      <Login />
      <Register />

      <style jsx LoginStyle>
        {LoginStyle}
      </style>
    </main>
  );
};
