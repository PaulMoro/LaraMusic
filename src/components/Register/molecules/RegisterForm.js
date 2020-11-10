import React, { useState } from "react";
import Error from "../../../lib/Error";
import { signUp } from "../../../lib/userApi";
import { useForm } from "../../../Hooks/useForm";
import RegisterStyle from "../../Style/Register/RegisterStyle";

export const RegisterForm = () => {
  const [error, setError] = useState("");

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    biography: "",
    password: "",
    password_confirmation: "",
  });

  const {
    first_name,
    last_name,
    username,
    email,
    biography,
    password,
    password_confirmation,
  } = formRegisterValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = await signUp(
      first_name,
      last_name,
      username,

      email,
      biography,
      password,
      password_confirmation
    );
    if (error) {
      setError(error);
    }
    return false;
  };

  return (
    <>
      {error && <Error message={error} />}
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-item" id="name">
          <label htmlFor="first_name">Your first name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={first_name}
            onChange={handleRegisterInputChange}
          />
        </div>
        <div className="form-item" id="name">
          <label htmlFor="last_name">Your last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={last_name}
            onChange={handleRegisterInputChange}
          />
        </div>
        <div className="form-item" id="name">
          <label htmlFor="username">How do you want be named?</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleRegisterInputChange}
          />
        </div>
        <div className="form-item" id="email">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleRegisterInputChange}
          />
        </div>
        <div className="form-item" id="biography">
          <label htmlFor="biography">What is your favorite music?</label>
          <input
            type="text"
            id="biography"
            name="biography"
            value={biography}
            onChange={handleRegisterInputChange}
          />
        </div>

        <div className="form-item" id="password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleRegisterInputChange}
          />
          <span>{`Password, 8 characters min`}</span>
        </div>
        <div className="form-item" id="pass">
          <label htmlFor="password_confirmation">
            Please confirm your password
          </label>
          <input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleRegisterInputChange}
          />
        </div>
        <div className="buttons">
          <button className="send" type="submit">
            Register
          </button>
        </div>
        <small>
          By registering you confirm that you accept the
          <a href="/">Terms and Conditions and Privacy Policy</a>
        </small>
      </form>
      <style jsx RegisterStyle>
        {RegisterStyle}
      </style>
    </>
  );
};
