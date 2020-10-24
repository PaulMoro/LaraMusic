import React from "react";
import { VscRocket, VscFiles, VscAccount, VscThumbsup, VscFlame, VscFolderOpened, VscFileSubmodule } from "react-icons/vsc" 
import { CgMusicNote } from "react-icons/cg"


import "../assets/style/componentStyle/com__main.scss";

const Main = () => {
  return (
  <main>
    <div className="logo">
      <img src="" alt="" sizes="" srcset=""/>
    </div>
    <div className="container">
      <ul className="list">
        <li>
          <div>< VscRocket /></div>
          <p>Dicover</p>
        </li>
        <li>
          <div>< CgMusicNote /></div>
          <p>Song</p>
        </li>
        <li>
          <div>< VscFiles /></div>
          <p>ALbums</p>
        </li>
        <li>
          <div>< VscAccount /></div>
          <p>Artists</p>
        </li>
      </ul>
      <h2>My Trakcs</h2>
      <ul className="list">
        <li>
          <div>< VscThumbsup /></div>
          <p>Favourite</p>
        </li>
        <li>
          <div>< VscFlame /></div>
          <p>Recent History</p>
        </li>
        <li>
          <div>< VscFolderOpened /></div>
          <p>Local Files</p>
        </li>
      </ul>
      <h2>Play List</h2>
      <ul className="list">
        <li>
          <div>< VscFileSubmodule /></div>
          <p>Bangla</p>
        </li>
        <li>
          <div>< VscFileSubmodule /></div>
          <p>English</p>
        </li>
        <li>
          <div>< VscFileSubmodule /></div>
          <p>My Style</p>
        </li>
        <li>
          <div>< VscFileSubmodule /></div>
          <p>Hindi</p>
        </li>
      </ul>
    </div>
  </main>
  );
};

export default Main