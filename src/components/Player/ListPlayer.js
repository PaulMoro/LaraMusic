import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import SectionPopular from "./molecules/SectionPopular.js";
import FeaturedTracks from "./FeaturedTracks";

import { VscThumbsup } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import logoAlbum from "../../../assets/img/album.png";

import FavoritesStyles from "../Style/Favorites/FavoritesStyles";

const List = ({ title }) => {
  const { user } = useAuth();

  const musiclist = user?.profile?.musiclists ?? [];

  const tracks =
    musiclist.find((playlist) => playlist.title === title)?.musictracks ?? [];

  return (
    <main className="containerContent">
      <FeaturedTracks title={title} />
      <section className="about__album">
        <div className="banner__song">
          <img src={logoAlbum} alt="list-image" />
        </div>
        <div className="info__album_container">
          <a href="">// My personal list</a>
          <h1 className="title__album">List Name: {title}</h1>
          <h2 className="authors__album">
            Build a unlimited playlist, and listen every time
          </h2>

          <section className="content__music">
            {tracks.map((item) => (
              <div className="tab__music" key={item.id}>
                <div className="tab__music__icons">
                  <div className="icon">
                    <CgPlayButtonO></CgPlayButtonO>
                  </div>
                </div>
                <p className="tab__music__title">{item.title}</p>
                <p className="tab__music__plays">{item.artist}</p>
                <p className="tab__music__time">{item.fuente}</p>
                <p className="tab__music__time">{item.gender}</p>
                <div className="icon">
                  <VscThumbsup></VscThumbsup>
                </div>
                <div className="icon">
                  <GrAddCircle></GrAddCircle>
                </div>
              </div>
            ))}
          </section>
          {/* <div className='show__more'>
						<p>Show More</p>
					</div> */}
        </div>
      </section>
      <style jsx FavoritesStyles>
        {FavoritesStyles}
      </style>
    </main>
  );
};

export default List;
