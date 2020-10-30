import css from "styled-jsx/css";
export default css.CardSongStyles`
.card__song {
  margin-right: 2em;

}
.card__song--image{
  position: relative;
}
.title__song {
  padding-top: 5px;
  font-size: 0.9em;
  font-weight: 700;
  max-width:150px;
}
.artist_name {
  color: #969696;
  font-size: 0.7em;
}
.card__song img {
  width: 150px;
  height:150px;
  border-radius: 5px;
  object-fix:cover;
    vertical-align: top;
}
.card__overlay{
    background: rgb(0, 0, 0, .4);
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
.card__overlay img{
  height:40px;
  cursor:pointer;
  opacity:.7;
}
.card__song--image:hover .card__overlay{
    display: flex;
}
.card__song--image img:hover{
  opacity:1;
}
`;
