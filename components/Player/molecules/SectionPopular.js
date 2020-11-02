import React, { useState, useEffect } from "react";
import { CgShare } from "react-icons/cg";

import sectionPopular from "./styles/sectionPopular";

const SectionPopular = () => {
  /* call API */

  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch(
      "https://api-v2.hearthis.at/feed/?page=1&count=1"
    );
    const music = await datos.json();
    setMusic(music);
  };

  return (
    <>
      {music.map((item) => (
        <section id="trending">
          <img src={item.artwork_url} />
          <h3>// TRENDING</h3>
          <h1>{item.title}</h1>
          <h2>- {item.user.username}</h2>
          <div className="buttons">
            <button className="buttons__one">Play ►</button>
            <button className="buttons__two">
              <CgShare />
            </button>
          </div>

          <style jsx sectionPopular>
            {sectionPopular}
          </style>
        </section>
      ))}
    </>
  );
};

export default SectionPopular;
