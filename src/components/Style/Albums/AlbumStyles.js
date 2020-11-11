import css from "styled-jsx/css";

export default css.AlbumStyles`
/* feature */
.feature__tracks {
  padding-left: 1rem;
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
  flex-wrap: wrap;
}
.card__list img {
  width: 150px;
  border-radius: 5px;
}

.containerContent {
  padding: 0.5rem 0 0 0;
  overflow-y: scroll;
  grid-column: 2/3;
  grid-row: 2/4;
}
.containerContent::-webkit-scrollbar {
  display: none;
}

.about__album {
  margin-top: 5em;
  grid-column: 2/4;
  grid-row: 3/5;
  display: flex;
  background: linear-gradient(#faf0fa, #d6cbd6);
  position: relative;
}
.banner__song {
  margin-right: 2em;
  position: relative;
  top: -3.5rem;
  left: 2rem;
}
.banner__song img {
  height: 600px;
}
.info__album_container {
  position: absolute;
  top: -3.8em;
  left: 22rem;
}
.info__album_container a {
  text-decoration: none;
  color: #969696;
  font-weight: 800;
  font-size: small;
}
.title__album {
  color: #0f1e36;
  font-size: 3.6em;
  font-weight: bold;
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
.content__music {
  width: 60vw;
  margin: 3rem 0;
  max-width: 1720px;
}
@media screen and (max-width: 1023px) {
}
@media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 320px) {
}


`;
