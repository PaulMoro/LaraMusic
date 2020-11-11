import css from "styled-jsx/css";

export default css.cardArtistStyle`
.title__song {
  padding-top: 10px;
  font-weight: 700;
  
}

.artist_name {
  color: #989898;
  font-size: 12;
}

.card__artist img {
  height: 15rem;
  width: 15rem;
}

@media screen and (max-width: 1023px) {

}
@media screen and (max-width: 768px) {


}
@media screen and (max-width: 600px) {
    .title__song {
    font-size: 1.5rem;
}

.artist_name {
  font-size: 1rem;
}
  .card__artist img {
  height: 22rem;
  width: 22rem;
}
}
@media screen and (max-width: 480px) {
      .title__song {
    font-size: 1.8rem;
}

.artist_name {
  font-size: 1.3rem;
}
}
@media screen and (max-width: 320px) {
        .title__song {
    font-size: 1.3rem;
}

.artist_name {
  font-size: 1rem;
}
.card__artist img {
  height: 15rem;
  width: 15rem;
}

}
`;
