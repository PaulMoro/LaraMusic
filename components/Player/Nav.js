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
<<<<<<< HEAD
          <li>
            <Link href='/artist' className='header__link--artist'>
              <a>
                <div>< VscRocket /></div>
                <p>Dicover</p>
              </a>
		      	</Link>
          </li>
          <li>
            <Link href='/artist' className='header__link--artist'>
              <a>
                <div>< CgMusicNote /></div>
                <p>Song</p>
              </a>
		      	</Link>
=======
          <li className="item">
            <div>
              <VscRocket />
            </div>
            <p>Dicover</p>
          </li>
          <li className="item">
            <div>
              <CgMusicNote />
            </div>
            <p>Song</p>
>>>>>>> fabian
          </li>
          <li className="item">
            <div>
              <VscFiles />
            </div>
            <p>ALbums</p>
          </li>
          <li className="item">
            <div>
              <VscAccount />
            </div>
            <p>Artists</p>
          </li>
        </ul>
        <h2>My Trakcs</h2>
        <ul className="list">
          <li className="item">
            <div>
              <VscThumbsup />
            </div>
            <p>Favourite</p>
          </li>
          <li className="item">
            <div>
              <VscFlame />
            </div>
            <p>Recent History</p>
          </li>
          <li className="item">
            <div>
              <VscFolderOpened />
            </div>
            <p>Local Files</p>
          </li>
        </ul>
        <h2>Play List</h2>
        <ul className="list">
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <p>Bangla</p>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <p>English</p>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <p>My Style</p>
          </li>
          <li className="item">
            <div>
              <VscFileSubmodule />
            </div>
            <p>Hindi</p>
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
