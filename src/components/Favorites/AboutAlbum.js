import React from "react";
import ContentAlbum from "./molecules/ContentMusic";
import logoAlbum from "../../../assets/img/album.png";
import AlbumStyles from "../Style/Albums/AlbumStyles";

function AboutAlbum() {
  return (
    <section className="about__album">
      <div className="banner__song">
        <img src={logoAlbum} alt="" />
      </div>
      <div className="info__album_container">
        <a href="">// Album</a>
        <h1 className="title__album">Around The World</h1>
        <h2 className="authors__album">Akcent Feat. Lidia Buble & DDY Nunes</h2>
        <p className="description__authors">
          The artists we represent are one of the most successful in Romania and
          also were a huge breakthrough in the international market, topping
          radio and sales around the world.
        </p>
        <section className="content__music">
          <ContentAlbum></ContentAlbum>
        </section>
        <div className="show__more">
          <p>Show More</p>
        </div>
      </div>
      <style jsx AlbumStyles>
        {AlbumStyles}
      </style>
    </section>
  );
}
export default AboutAlbum;
