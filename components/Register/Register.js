import React from "react";
import LoginStyle from "./LoginStyle";
import { RegisterForm } from "./molecules/RegisterForm";

export const Register = () => {
  return (
    <main className="login">
      <section id="create-account" className="tabcontent account">
        <div className="tabcontent__form">
          <h1>Music Online, your everlast playlist</h1>
          <p>Play your favorite music from everywhere </p>
          <RegisterForm />
        </div>
      </section>
      <style jsx LoginStyle>
        {LoginStyle}
      </style>
    </main>
  );
};
