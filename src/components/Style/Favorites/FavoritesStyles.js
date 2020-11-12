import css from "styled-jsx/css";

export default css.FavoritesStyles`
/* feature */
.feature__tracks {
  padding-left: 1rem;
  grid-column: 2/3;
  grid-row: 3/4;

}
.feature_tracks_title h1 {
  font-size: 1.3rem;
  font-weight: bold;
}
.card__list {
  display: flex;
  margin-top: 10px;
<<<<<<< HEAD
  overflow-x:scroll;
=======
  overflow-x: scroll;
>>>>>>> 4999fd13776b43b90c76c5d3f42e7665274b5dcc
}
.card__list img {
  width: 150px;
  border-radius: 5px;
}
.container__favorites{
  overflow-y: scroll;
  height:65vh;
  position:static;

}
.containerContent {
  padding: 0.5rem 0 0 0;

  grid-column: 2/3;
  grid-row: 2/5;
}
.containerContent::-webkit-scrollbar {
  display: none;
}

.about__album {
  margin-top: 5em;
  grid-column: 2/3;
  grid-row: 4/5;
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
  height: 500px;
  overflow-y:scroll;
}

.content__music__container {
  width: 60vw;
  margin: 2rem 0;
  // max-width: 1720px;

}

.tab__music {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
}

.tab__music:hover {
  transition: all 0.3s ease-in-out;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: context-menu;
}
.tab__music:hover {
  transition: all 0.3s ease-in-out;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: context-menu;
}
.icon {
  cursor: pointer;
  opacity: 0.5;
}
.icon:hover {
  opacity: 1;
}

.tab__music__title,
.tab__music__plays,
.tab__music__time,
.tab__music__icon {
  padding-left: 2%;
}
.tab__music__title {
  width: 250px;
  padding: 0;
  text-align: left;
}

.tab__music__icons {
  display: flex;
  justify-content: space-between;
}
.card__song {
  margin-right: 2em;
}
.card__song--image {
  position: relative;
}
.title__song {
  padding-top: 5px;
  font-size: 0.9em;
  font-weight: 700;
  max-width: 150px;
}
.artist_name {
  color: #969696;
  font-size: 0.7em;
}
.card__song img {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  vertical-align: top;
}
.card__overlay {
  transition: all 0.3s ease-in-out;
  background: rgb(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  border-radius: 5px;
}
.card__overlay img {
  height: 35px;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.4s ease-in-out;
}
.card__overlay img:hover {
  height: 45px;
}
.card__song--image:hover .card__overlay {
  display: flex;
}
.card__song--image img:hover {
  opacity: 1;
}
#trending{
  grid-column:2/3;
  grid-row:2/3;
  border:1px solid red;
}
#trending img{
width:100%
}

@media screen and (max-width: 1024px) {
.containerContent {

  grid-column: 1/3;
  border:1px solid red;
}
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 600px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 416px) {
}


`;
