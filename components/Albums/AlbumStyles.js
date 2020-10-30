import css from "styled-jsx/css";

export default css.AlbumStyles`
/* feature */
.feature__tracks {
  grid-column: 2/3;
  grid-row: 2/3;
}
.feature_tracks_title h1 {
  font-size: 1.3rem;
  font-weight: bold;
}
.card__list {
  display: flex;
  margin-top: 10px;
}
.card__list img {
  width: 150px;
  border-radius: 5px;
}




.about__album {
  margin-top: 1em;
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  background-color: #eee2ee;
  position: relative;
}
.banner__song {
  margin-right: 2em;
  position: relative;
  top: -3.5em;
}
.banner__song img {
  height: 600px;
}
.info__album_container {
  position: absolute;
  top: -3.5em;
  left: 20em;
}
.info__album_container a {
  text-decoration: none;
  color: #969696;
  font-weight: 700;
  font-size: small;
}
.title__album {
  margin: 10px 0;
  color: #0f1e36;
  font-size: 3.5em;
}
.authors__album {
  color: #969696;
  font-size: 1em;
  margin-bottom: 10px;
}
.description__authors {
  width: 30vw;
  font-size: small;
  color: #969696;
}
.show__more p {
  color: #0f1e36;
  font-size: smaller;
  text-align: center;
  font-weight: 600;
}





`;
