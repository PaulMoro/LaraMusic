import React from "react";

import elipse from "../../../assets/img/Artist/Ellipse.png";

import bannerImg from "../../../assets/img/Artist/frame.png";

import ArtistStyle from "../Style/Artist/ArtistStyle";

export const Banner = () => {
  return (
    <main className="main-container">
      <section className="banner">
        <div className="banner__toplist">
          <img className="banner__toplist__image" src={bannerImg} alt />
          <div className="banner__toplist__info">
            <div className="banner__toplist__info-description">
              <img src={elipse} alt />
              <div className="banner__toplist__info-description--desc">
                <h2>artist</h2>
                <div className="info-group">
                  <div className="info-item">
                    <p className="title"> followers</p>
                    <p className="number">50.55</p>
                  </div>
                  <div className="info-item">
                    <p className="title">followers</p>
                    <p className="number">50.55</p>
                  </div>
                  <div className="info-item">
                    <p className="title">followers</p>
                    <p className="number">50.55</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__toplist__info-list">
              <ol>
                <li>
                  {" "}
                  <p> Tracks of my Tears </p>{" "}
                </li>
                <li>
                  {" "}
                  <p> Only You </p>{" "}
                </li>
                <li>
                  {" "}
                  <p> What Tyeh Say</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>Sittin on the dock of the bay</p>{" "}
                </li>
                <li>
                  {" "}
                  <p>When a man loves a woman</p>{" "}
                </li>
                <li>
                  <p>Walk this way</p>
                </li>
                <li>
                  {" "}
                  <p>Me in honey</p>
                </li>
                <li>
                  {" "}
                  <p>Fool in a rain</p>
                </li>
              </ol>
              <div className="buttons">
                <button className="buttons__single buttons__single-play">
                  Play All
                </button>
                <button className="buttons__single buttons__single-share" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner__feature feature1">
          <img src={bannerImg} alt />
          <span className="banner__feature-background" />
          <span className="banner__feature-label" />
        </div>
        <div className="banner__feature feature2">
          <img src={bannerImg} alt />
          <span className="banner__feature-background" />
          <span className="banner__feature-label" />
        </div>
      </section>

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
      </section>

      <style jsx ArtistStyle>
        {ArtistStyle}
      </style>
    </main>
  );
};
