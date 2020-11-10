import css from "styled-jsx/css";

export default css.ContainerSongStyle`
.song {
      grid-column: 2/3;
  grid-row: 2/3;
  height: 200px;
  margin-top: 13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
}

.song__tittle {
  font-size: 16px;
  line-height: 22px;
}

#song__item {
  margin-right: 20px;
  width: 112px;
  height: 154px;
}

#song__item img {
  width: 100%;
  height: 112px;
}

#song__item h4 {
  font-size: 12px;
  line-height: 16px;
  color: #0F1E36;
}

#song__item p {
  font-size: 10px;
  line-height: 14px;
  color: #0F1E36;
  opacity: 0.48;
}
`;
