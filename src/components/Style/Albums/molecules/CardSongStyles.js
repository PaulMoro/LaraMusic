import css from "styled-jsx/css";
export default css.CardSongStyles`
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
  object-fix: cover;
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

`;
