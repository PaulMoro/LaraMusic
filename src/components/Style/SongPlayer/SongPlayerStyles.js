import css from "styled-jsx/css";

export default css.PlayStyles`
.info__song {
  grid-column: 1/2;
  grid-row: 4/5;
  background-color: #9e4f9e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info__song img {
  height: 50px;
  margin-right: 10px;
  border-radius: 10%;
}
.artist h4 {
  color: white;
}
.artist p {
  color: #f69da8;
  font-size: small;
}
.player {
  grid-column: 2/3;
  grid-row: 4/5;
}
.player__audio {
  background-color: #0f1e36;
}


`;
