import React from "react";
import Link from "next/link";
import {
  VscRocket,
  VscFiles,
  VscAccount,
  VscThumbsup,
  VscFlame,
  VscFolderOpened,
  VscFileSubmodule,
} from "react-icons/vsc";
import { CgMusicNote } from "react-icons/cg";
import logo from "../../assets/img/Artist/logo-footer.png";

import navStyle from "./styles/navStyle";

const NavHomeScreen = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Lara logo" />
      </div>
      <div className="container">
        <ul className="list">
          <li className="item">
            <Link href='/player' className='header__link--player'>
              <a>
                <div>< VscRocket /></div>
                <strong>Dicover</strong>
              </a>
		      	</Link>
          </li>
          <li className="item">
            <Link href='/artist' className='header__link--artist'>
              <a>
                <div>< CgMusicNote /></div>
                <strong>Song</strong>
              </a>
		      	</Link>
          </li>
          <li className="item">
            <Link href='/album' className='header__link--album'>
              <a>
                <div>< VscFiles /></div>
                <strong>ALbums</strong>
              </a>
		      	</Link>
          </li>
          <li className="item">
            <Link href='/artist' className='header__link--artist'>
              <a>
                <div>< VscAccount /></div>
                <strong>Artists</strong>
              </a>
		      	</Link>
          </li>
        </ul>
        <h2>My Trakcs</h2>
        <ul className="list">
          <li className="item">
            <div>
              <VscThumbsup />
            </div>
            <strong>Favourite</strong>
          </li>
          <li className="item">
            <div>
              <VscFlame />
            </div>
            <strong>Recent History</strong>
          </li>
          <li className="item">
            <div>
              <VscFolderOpened />
            </div>
            <strong>Local Files</strong>
          </li>
        </ul>
        <h2>Play List</h2>
        <ul className="list">
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <strong>Bangla</strong>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <strong>English</strong>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <strong>My Style</strong>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <strong>Hindi</strong>
          </li>
        </ul>
      </div>

      <style jsx navStyle>
        {navStyle}
      </style>
    </nav>
  );
};

export default NavHomeScreen;
