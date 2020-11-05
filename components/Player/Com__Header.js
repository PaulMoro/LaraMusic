import React from "react";
import Link from "next/link";
import { VscSearch, VscBell } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import Header from "./styles/HeaderStyle";

const HeaderHome = () => {
  return (
    <header id="headerHome">
      <div className="searchBar">
        <div className="searchBar_icon">
          <FiSearch />
        </div>
        <input
          type="text"
          name=""
          placeholder="Search your entertainment"
          id=""
        />
      </div>
      <ul>
        <li className="iconsTop">
          <figure>
            <VscBell />
          </figure>
        </li>
        <li className="userInf">
          <img src="https://i.imgur.com/rQ73ETF.jpg" alt="" />
          <div className="userInf__prop">
            <a href="/profile">Fulanita Roquera</a>
          </div>
        </li>
      </ul>

      <style jsx Header>
        {Header}
      </style>
    </header>
  );
};

export default HeaderHome;
