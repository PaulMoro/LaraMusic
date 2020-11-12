import React, { useState, useEffect } from "react";
import { getSongs } from "../../../lib/hearthisRequest";
import { CgShare } from "react-icons/cg";
import { FiPlay } from "react-icons/fi";
import sectionPopular from "../../Style/Player/molecules/sectionPopular";
import { getPlaylistCleaned } from "../../../lib/spotifyRequest";
const SectionPopular = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const playlist = await getPlaylistCleaned("37i9dQZF1DX5BAPG29mHS8", 1);
    const musica = playlist;
    setMusic(musica);
  };

  return (
    <>
      {music.map((item) => (
        <section id="trending">
          <img src={item.image_uri} />
          <h3>// Trending</h3>
          <h1>{item.title}</h1>
          <h2>{item.artist}</h2>
          <div className="buttons">
            <button className="buttons__one">
              Play <FiPlay></FiPlay>
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
