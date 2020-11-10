import React from "react";
import ArtistStyle from "../Style/Artist/ArtistStyle";

export const FilterArtist = () => {
  return (
    <section className="filter-artist">
      <div className="filter-artist__select">
        <h2>Filter Artist</h2>
        <ul>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </div>
      <div className="filter-artist__genere">
        <div className="filter-artist__genere-item">Blues</div>
        <div className="filter-artist__genere-item">Electronic</div>
        <div className="filter-artist__genere-item">Country</div>
        <div className="filter-artist__genere-item">Clasical</div>
        <div className="filter-artist__genere-item">Dance</div>
        <div className="filter-artist__genere-item">Hip Hop</div>
        <div className="filter-artist__genere-item">Jazz</div>
        <div className="filter-artist__genere-item">Latin</div>
        <div className="filter-artist__genere-item">Blues</div>
        <div className="filter-artist__genere-item">Electronic</div>
        <div className="filter-artist__genere-item">Country</div>
        <div className="filter-artist__genere-item">Clasical</div>
        <div className="filter-artist__genere-item">Dance</div>
        <div className="filter-artist__genere-item">Hip Hop</div>
        <div className="filter-artist__genere-item">Jazz</div>
        <div className="filter-artist__genere-item">Latin</div>
      </div>
      <div className="filter-artist__covers">
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
        <div className="filter-artist__covers-item">
          <img src="../images/cover.png" alt />
          <p>Jonnas Brothers</p>
        </div>
      </div>

      <style jsx ArtistStyle>
        {ArtistStyle}
      </style>
    </section>
  );
};
