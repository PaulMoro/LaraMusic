import React from "react";
import {VscSearch, VscBell} from "react-icons/vsc"
import { CgCrown } from "react-icons/cg"

import "../../assets/style/componentStyle/com__header.scss";

const HeaderHome = () => {
  return (
    <header id="headerHome">
      <div className="searchBar">
        <div><VscSearch /></div>
        <input type="text" name="" id=""/>
      </div>
      <ul>
        <li className="iconsTop">
          <div><VscBell /></div>
        </li>
        <li className="userInf">
          <img src="https://i.imgur.com/rQ73ETF.jpg" alt=""/>
          <div className="userInf__prop">
            <h4>Fulanita Roquera</h4>
            <div className="userInf__prop__state">
              <div>< CgCrown /></div>
              <p>Premium</p>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default HeaderHome