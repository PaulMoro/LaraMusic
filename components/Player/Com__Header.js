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
          <Link href='/profile' className='header__link--profile'>
            <a >
              <img src="https://i.imgur.com/rQ73ETF.jpg" alt="" />
              <div className="userInf__prop">
                <h4>Fulanita Roquera</h4>
              </div>
            </a>
          </Link>
        </li>
      </ul>

      <style jsx Header>
        {Header}
      </style>
    </header>
  );
};

export default HeaderHome;
