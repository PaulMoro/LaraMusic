import Link from "next/link";

import { useAuth } from "../../contexts/AuthContext";

import logo from "../../../assets/img/Artist/logo-footer.png";

import playerStyles from "../Style/Player/PlayerStyles";

import { CgMusicNote } from "react-icons/cg";
import {
  VscRocket,
  VscFiles,
  VscAccount,
  VscThumbsup,
  VscFlame,
  VscFolderOpened,
  VscFileSubmodule,
} from "react-icons/vsc";

const NavHomeScreen = () => {
  const { user } = useAuth();
  const musicLists = user?.profile?.musiclists ?? [];

  return (
    <nav>
      <Link href="/player">
        <img src={logo} className="logo" alt="Lara logo" />
      </Link>
      <div className="container">
        <ul className="list">
          <li className="item">
            <Link href="/player">
              <a>
                <div>
                  <VscRocket />
                </div>
                <strong>Discover</strong>
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/artist">
              <a>
                <div>
                  <CgMusicNote />
                </div>
                <strong>Song</strong>
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/album">
              <a>
                <div>
                  <VscFiles />
                </div>
                <strong>ALbums</strong>
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/artist">
              <a>
                <div>
                  <VscAccount />
                </div>
                <strong>Artists</strong>
              </a>
            </Link>
          </li>
        </ul>
        <h2>Recent songs</h2>
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
          {user && (
            <li className="item">
              <div>
                {musicLists.map((item) => (
                  <Link href="/listplayer" key={item.id}>
                    <a>
                      <VscFileSubmodule />
                      <strong>{item.title}</strong>
                    </a>
                  </Link>
                ))}
              </div>
            </li>
          )}
        </ul>
      </div>
      <style jsx playerStyles>
        {playerStyles}
      </style>
    </nav>
  );
};

export default NavHomeScreen;
