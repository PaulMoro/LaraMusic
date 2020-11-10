import React from "react";
import { RegisterForm } from "./molecules/RegisterForm";
import registerImage from "../../../assets/img/register.jpg";
import RegisterStyle from "../Style/Register/RegisterStyle";

export const Register = () => {
  return (
    <main className="login">
      <div className="container">
        <section id="create-account" className="tabcontent login__container">
          <div className="tabcontent__form">
            <h1>Register for listen now!</h1>
            <RegisterForm />
          </div>
          <div className="login__container-image">
            <img src={registerImage} alt="register-image" />
          </div>
        </section>
      </div>
      <style jsx RegisterStyle>
        {RegisterStyle}
      </style>
    </main>
  );
};
