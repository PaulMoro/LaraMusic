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

.containerAlbum{
  padding:.5rem 1rem;
  overflow-y: scroll;
  grid-column: 2/3;
  grid-row: 2/4;

}
.containerAlbum::-webkit-scrollbar{
    display: none;
}

.about__album {
  margin-top: 5em;
  grid-column: 2/4;
  grid-row: 3/5;
  display: flex;
  background: linear-gradient(#faf0fa, #d6cbd6);
  position: relative;
  left:-1.5rem;
}
.banner__song {
  margin-right: 2em;
  position: relative;
  top: -3.5rem;
  left:2rem;
}
.banner__song img {
  height: 600px;
}
.info__album_container {
  position: absolute;
  top: -3.5em;
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
  font-size: 3.5em;
  font-weight:bold;
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
.content__music{
  width: 60vw;
  margin:3rem 0 ;
  max-width:1720px;
}


`;
