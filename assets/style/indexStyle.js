import css from "styled-jsx/css";

export default css.index`

* {
  margin: 0px;
  padding: 0px;
}

.lara {
  background-color:$background;
  display: grid;
  grid-template-columns: 200px 100% ;
  grid-template-rows: 68px 100% 68px;
  font-family: $font;
  width: 100%;
  height: 100%;
}
`;
