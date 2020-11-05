import css from "styled-jsx/css";

export default css.HomeStyle`
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e4f9e;
  height: 100px;
  padding: 0 10%;
  min-width:1124px;
}
.header__img__container img {
  height: 50px;
}

.perfil {
  padding: 28px 12% 0px 0px; 
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.perfil img {
  padding: 0;
  width: 43px;
  height: 43px;
  border-radius: 50%;
}

.perfil h4 {
  font-size: 16px; /* $fs-regular */
  color: #F9F9F9; /* $background */
}

.perfil button {
  font-size: 12px; /* $fs-small */
  color: #FFC24B; /* $secondary-color */
  font-weight: 600; /* $font-semi-bold */
  background-color: transparent;
  border: none;
  text-decoration: underline;
}

`;
