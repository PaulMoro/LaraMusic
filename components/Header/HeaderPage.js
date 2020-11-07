import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import HomeStyle from "./HeaderStyle";
import userImage from "../../assets/img/user.jpg";
import logo from "../../assets/img/Artist/logo.png";

function Header() {
  const { user, signOut } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <img src={logo} alt="Logo-Lara" className="header__img" />
        </Link>
        <div className="header__links">
          {user && (
            <Link href="/player">
              <a className="header__link--player">Lara Player</a>
            </Link>
          )}
          {!user && (
            <Link href="/register">
              <a className="header__link--player">Sign Up Now</a>
            </Link>
          )}
          {!user && (
            <Link href="/login">
              <a className="header__link--login">Login</a>
            </Link>
          )}
          {user && (
            <Link href="/profile">
              <div className="perfil">
                <figure className="perfil__img">
                  <img src={userImage} alt={user.username} />
                </figure>
                <div className="perfil__user--info">
                  <h3>{user.username}</h3>
                  <button onClick={signOut}> Logout </button>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <style jsx HomeStyle>
        {HomeStyle}
      </style>
    </header>
  );
}
export default Header;
