import css from "styled-jsx/css";

export default css.mainStyle`


.Container {
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  grid-column: 2/3;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  display: block;
  right: 0px;
  width: 85%;
  height: 85%;
}

article {
  grid-column: 2/3;
  grid-row: 2/3;
  padding-left: 22px;
  padding-top: 23px;
  background: linear-gradient(180deg, rgba(82, 33, 82, 0.06) 0%, rgba(158, 79, 158, 0.09) 26.23%);
}

article h2 {
  font-size: 16px;
  line-height: 22px;
}
`;

/* border: 1px green solid; */