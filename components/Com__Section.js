import React, { useState, useEffect } from "react";

import ListTrack from "./molecules/Mol__ListTrack"
import ContainerSong from "./molecules/Mol__ContainerSong.js"

import "../assets/style/componentStyle/com__Section.scss";

const Section = () => {
  return (
    <section>
    <div id="trending">
      <img src="https://blog.rockthetraveller.com/wp-content/uploads/2017/03/SLIDER-10-festivales-de-musica-0-Foto.jpg" alt=""/>
      <h3>// TRENDING</h3>
      <h1>Akcent Feat Lidia <br/> Blble & DDY Nunes</h1>
      <h2>- Kamelia</h2>
      <div className="buttons">
        <button className="buttons__one">Play ►</button>
        <button className="buttons__two">COM</button>
      </div>
    </div>
    <article>
      <h2>Featured Tracks</h2>
      <ContainerSong />
      <h2>Top Tracks</h2>
      <ListTrack />
    </article>
  </section>
  );
};

export default Section