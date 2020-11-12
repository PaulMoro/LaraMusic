import React, { useState, useEffect } from 'react';
import SquarePlayButton from '../../Play/molecules/SquarePlayButton';
import { getPlaylist } from '../../../lib/hearThisAtRequest';
import { CgShare } from 'react-icons/cg';
import sectionPopular from '../../Style/Player/molecules/sectionPopular';

const SectionPopular = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const music = await getPlaylist('/feed/popular', 1);

    setMusic(music);
  };

  return (
    <>
      {music.map((item) => {
        return (
          <section id='trending'>
            <img src={item.image_uri} />
            <h3>// TRENDING</h3>
            <h1>{item.title}</h1>
            <h2>- {item.artist}</h2>
            <div className='buttons'>
              <SquarePlayButton song={item} />
              <button className='buttons__two'>
                <CgShare />
              </button>
            </div>
            <style jsx sectionPopular>
              {sectionPopular}
            </style>
          </section>
        );
      })}
    </>
  );
};

export default SectionPopular;
