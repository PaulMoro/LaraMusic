import React from "react";
import { VscRocket, VscFiles, VscAccount, VscThumbsup, VscFlame, VscFolderOpened, VscFileSubmodule } from "react-icons/vsc" 
import { CgMusicNote } from "react-icons/cg"
import {  Main, Img, Tittle, Container, Container_item, Icon } from "../../assets/style/StyleHomeScreen/main.js"




const MainHomeScreen = () => {


  return (
    <Main>
      <Img />
      <Container>
        <ul>
          <Container_item>
            <Icon>
              <VscRocket/>
            </Icon>
            Discover
          </Container_item>
          <Container_item>
            <Icon>
              <CgMusicNote/>
            </Icon>
            Song
          </Container_item>
          <Container_item>
            <Icon>
              <VscFiles/>
            </Icon>
            ALbums
          </Container_item>
          <Container_item>
            <Icon>
              <VscAccount/>
            </Icon>
            Artists
          </Container_item>
        </ul>
      <Tittle>
        My Tracks
      </Tittle>
        <ul>
          <Container_item>
            <Icon>
              <VscThumbsup/>
            </Icon>
            Favourite
          </Container_item>
          <Container_item>
            <Icon>
              <VscFlame/>
            </Icon>
            Recent History
          </Container_item>
          <Container_item>
            <Icon>
              <VscFolderOpened/>
            </Icon>
            Local Files
          </Container_item>
        </ul>
      <Tittle>
        Playlist
      </Tittle>
        <ul>
          <Container_item>
            <Icon>
            <VscFileSubmodule/>
            </Icon>
            Bangla
          </Container_item>
        </ul>
      </Container>
    </Main>

/* 
    <main>
      <div className="logo">
        <img src="https://i.imgur.com/gVXJcu3.png" alt="Lara logo"/>
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
    </main> */
  );
};

export default MainHomeScreen