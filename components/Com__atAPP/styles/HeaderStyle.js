import css from "styled-jsx/css";

export default css.Header`
header {
  width: 100%;
  height: 102px;
  background-color: #9e4f9e;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

header img {
  padding: 28px 0 0 12%;
  height: 53px;
}

.perfil {
  padding: 28px 12% 0px 0px;
  width: 180px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.perfil img {
  padding: 0;
  width: 43px;
  height: 43px;
  border-radius: 50%;
}

.perfil h4 {
  font-size: 16;
  color: #f9f9f9;
}

.perfil p {
  font-size: 12;
  color: #ffc24b;
  font-weight: 600;
}
`;
