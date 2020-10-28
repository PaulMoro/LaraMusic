import css from "styled-jsx/css";

export default css.SectionStyle`
section {
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  grid-column: 2/3;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  display: block;
  width: 100%;
  height: 307px;
}

#trending {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  height: 307px;
  color: #0F1E36;
}

#trending img {
  height: 100%;
}

#trending h3 {
  position: absolute;
  top: 92px;
  left: 53px;
  font-size: 10px;
}

#trending h1 {
  position: absolute;
  top: 113px;
  left: 53px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
}

#trending h2 {
  position: absolute;
  top: 180px;
  left: 53px;
  font-size: 16px;
}

.buttons {
  position: absolute;
  top: 237px;
  left: 53px;
}
`;
